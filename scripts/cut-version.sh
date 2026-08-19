#!/usr/bin/env bash
# Freeze the current build as a permanently-hosted version of the canvas.
#
#   ./scripts/cut-version.sh v1 "First design pass"
#   ./scripts/cut-version.sh a  "Design run, arm A"
#
# The slug is an arbitrary [a-z0-9-] string, not a number: the design run
# publishes candidates at neutral single-letter hostnames so they can be judged
# blind. It becomes archive/<slug>/, the Worker name, and the hostname — keep it
# a single DNS label, since Cloudflare's Universal SSL only covers one level of
# subdomain and "v0.1" would need a paid certificate.
#
# Archives the BUILT OUTPUT, not the source. That is deliberate: rebuilding a
# two-year-old Astro tree depends on a registry, a Node version and a set of
# native binaries all still existing. A committed dist/ is ~36KB of static HTML
# and CSS that will render for as long as browsers do.
#
# Each version gets its own Worker and therefore its own hostname, because every
# asset path Astro emits is absolute (/_astro/…, /blog/) — a version can only be
# served from a root, never from a subpath of the live site.
set -euo pipefail

SLUG="${1:?usage: cut-version.sh <slug> [label]}"
LABEL="${2:-}"
[[ "$SLUG" =~ ^[a-z0-9][a-z0-9-]*$ ]] || { echo "slug must be [a-z0-9-] and start alphanumeric (it becomes a hostname label): $SLUG"; exit 1; }
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIR="$ROOT/archive/$SLUG"
CFG="$ROOT/archive/wrangler.$SLUG.jsonc"

[ -d "$DIR" ] && { echo "archive/$SLUG already exists — versions are immutable. Pick another slug."; exit 1; }

echo "==> building"
cd "$ROOT" && bun run build

echo "==> freezing dist/ into archive/$SLUG"
mkdir -p "$DIR"
rsync -a --delete "$ROOT/dist/" "$DIR/"

# Crawler control. These two files are the ONLY deviation from a byte-exact copy
# of dist/ — both are non-visual, and without them every archived version
# competes with the live site for the same content in search results.
printf '/*\n  X-Robots-Tag: noindex, nofollow\n' > "$DIR/_headers"
printf 'User-agent: *\nDisallow: /\n' > "$DIR/robots.txt"

cat > "$CFG" <<EOF
{
  // Frozen version "$SLUG" of the canvas.${LABEL:+ $LABEL}
  // Deploy: bunx wrangler deploy --config archive/wrangler.$SLUG.jsonc
  "\$schema": "../node_modules/wrangler/config-schema.json",
  "name": "thetokendad-$SLUG",
  "compatibility_date": "$(date +%Y-%m-%d)",
  "assets": {
    "directory": "./$SLUG"
  },
  // Custom domain declared in-repo, not the dashboard, so a rebuild re-asserts
  // the hostname. Single DNS label — Universal SSL covers one level. Without this
  // the Worker has no route (workers.dev is disabled) and is unreachable.
  "routes": [
    { "pattern": "$SLUG.thetoken.dad", "custom_domain": true }
  ]
}
EOF

echo "==> deploying"
cd "$ROOT" && bunx wrangler deploy --config "archive/wrangler.$SLUG.jsonc"

echo
echo "Frozen $SLUG ($(du -sh "$DIR" | cut -f1)). Next:"
echo "  1. git add archive/ && git commit -m \"Freeze $SLUG${LABEL:+ — $LABEL}\""
echo "  2. git tag site-$SLUG && git push --tags"
echo "  3. Add a $SLUG.thetoken.dad custom domain to the thetokendad-$SLUG Worker"
echo "  4. Note the version in the evolution post"
