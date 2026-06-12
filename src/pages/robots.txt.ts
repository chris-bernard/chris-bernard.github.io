import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) =>
`User-agent: *
Allow: /
Disallow: /cv-photo.jpg

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Omilex
Disallow: /

User-agent: YouBot
Disallow: /

Sitemap: ${sitemapURL.href}`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
