# Hitesh Rana

My personal portfolio website.

**Website:** [hitesh22rana.github.io](https://hitesh22rana.github.io/)

A single-page site with my projects, work history, and resume. Built with HTML, CSS, and JavaScript, using Geist, light and dark themes, and reduced-motion support.

Hosted on GitHub Pages from the root of the `main` branch. No build step is required.

## Search and sharing

`index.html` contains canonical, social-card, and Person/ProfilePage metadata. `social-preview.png` is used only for link previews. `robots.txt` and `sitemap.xml` expose the single canonical page; section anchors are not separate pages.

`llms.txt` links to a Markdown snapshot in `llms-full.txt`. Update that snapshot whenever the biography, projects, or work history changes. If the JSON-LD changes, update its SHA-256 hash in the Content Security Policy too.

GitHub Pages controls HTTP response headers, compression, and protocol support. HTML provides a Content Security Policy and referrer policy; framing protection, nosniff, Permissions-Policy, and HSTS changes require control of the serving host. A live response check confirmed gzip and HTTP/2 despite the audit's compression/protocol warnings. The small synchronous theme script prevents a flash of the wrong theme.

The audit's generic requests for share buttons, legal/editorial pages, a physical address, and trust badges do not fit this personal portfolio. Its about section, email link, resume, and work history already provide identity and contact information. Visible copy and design are preserved.
