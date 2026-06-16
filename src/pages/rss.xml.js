import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/siteConfig";

export async function GET(context) {
  const articles = await getCollection("articles");
  return rss({
    title: SITE.name,
    description: SITE.bio,
    site: context.site,
    items: articles.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
      link: `/articles/${post.id}`,
    })),
  });
}
