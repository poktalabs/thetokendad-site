/**
 * thetokendad.com -> thetoken.dad, 301, path and query preserved.
 *
 * The `.com` exists only to catch the reflex typo and hand its SEO value to the
 * canonical `.dad`. A deep link has to survive the hop — thetokendad.com/blog/x/
 * must land on thetoken.dad/blog/x/, not on the homepage — or the redirect
 * destroys exactly the value it was bought to capture.
 *
 * A Cloudflare Redirect Rule would also work and would not consume Worker
 * invocations. This is a Worker instead so the behaviour lives in the repo and
 * is reviewable, rather than being dashboard state nobody can diff. A
 * typo-catcher domain sees negligible traffic against the 100k/day free tier.
 */
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.protocol = 'https:';
    url.hostname = 'thetoken.dad';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  },
};
