#!/usr/bin/env bash
# Freeze the current build as a permanently-hosted version of the canvas.
#
#   ./scripts/cut-version.sh 1 "First design pass"
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

VERSION="${1:?usage: cut-version.sh <number> [label]}"
LABEL="${2:-}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIR="$ROOT/archive/v$VERSION"
CFG="$ROOT/archive/wrangler.v$VERSION.jsonc"

[ -d "$DIR" ] && { echo "archive/v$VERSION already exists — versions are immutable. Pick the next number."; exit 1; }

echo "==> building"
cd "$ROOT" && bun run build

echo "==> freezing dist/ into archive/v$VERSION"
mkdir -p "$DIR"
rsync -a --delete "$ROOT/dist/" "$DIR/"

# Crawler control. These two files are the ONLY deviation from a byte-exact copy
# of dist/ — both are non-visual, and without them every archived version
# competes with the live site for the same content in search results.
printf '/*\n  X-Robots-Tag: noindex, nofollow\n' > "$DIR/_headers"
printf 'User-agent: *\nDisallow: /\n' > "$DIR/robots.txt"

cat > "$CFG" <<EOF
{
  // Frozen v$VERSION of the canvas.${LABEL:+ $LABEL}
  // Deploy: bunx wrangler deploy --config archive/wrangler.v$VERSION.jsonc
  "\$schema": "../node_modules/wrangler/config-schema.json",
  "name": "thetokendad-v$VERSION",
  "compatibility_date": "$(date +%Y-%m-%d)",
  "assets": {
    "directory": "./v$VERSION"
  }
}
EOF

echo "==> deploying"
cd "$ROOT" && bunx wrangler deploy --config "archive/wrangler.v$VERSION.jsonc"

echo
echo "Frozen v$VERSION ($(du -sh "$DIR" | cut -f1)). Next:"
echo "  1. git add archive/ && git commit -m \"Freeze v$VERSION${LABEL:+ — $LABEL}\""
echo "  2. git tag site-v$VERSION && git push --tags"
echo "  3. Add a v$VERSION.thetoken.dad custom domain to the thetokendad-v$VERSION Worker"
echo "  4. Note the version in the evolution post"
