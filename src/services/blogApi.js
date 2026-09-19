const MODEWORLD_API =
  "https://modeworld.ir/wp-json/wp/v2/posts?per_page=10&_embed";

const IRAN_MODELING_API =
  "https://iranmodeling.net/wp-json/wp/v2/posts?per_page=10&_embed";

const MODISEH_FEED =
  "https://www.modiseh.com/blog/feed/";


/* -------------------------
   ModeWorld
------------------------- */

async function getModeWorldArticles() {
  const response = await fetch(MODEWORLD_API);

  if (!response.ok) {
    throw new Error("Failed to fetch ModeWorld articles");
  }

  const posts = await response.json();

  return posts.map((post) => {
    const featuredMedia =
      post._embedded?.["wp:featuredmedia"]?.[0];

    return {
      id: `modeworld-${post.id}`,
      title: post.title?.rendered || "",
      excerpt: post.excerpt?.rendered || "",
      content: post.content?.rendered || "",
      date: post.date,
      slug: post.slug,
      sourceUrl: post.link,
      image: featuredMedia?.source_url || "",
      imageAlt:
        featuredMedia?.alt_text ||
        post.title?.rendered ||
        "",
      source: "ModeWorld",
    };
  });
}


/* -------------------------
   Iran Modeling
------------------------- */

async function getIranModelingArticles() {
  const response = await fetch(IRAN_MODELING_API);

  if (!response.ok) {
    throw new Error("Failed to fetch Iran Modeling articles");
  }

  const posts = await response.json();

  return posts.map((post) => {
    const featuredMedia =
      post._embedded?.["wp:featuredmedia"]?.[0];

    return {
      id: `iranmodeling-${post.id}`,
      title: post.title?.rendered || "",
      excerpt: post.excerpt?.rendered || "",
      content: post.content?.rendered || "",
      date: post.date,
      slug: post.slug,
      sourceUrl: post.link,
      image: featuredMedia?.source_url || "",
      imageAlt:
        featuredMedia?.alt_text ||
        post.title?.rendered ||
        "",
      source: "Iran Modeling",
    };
  });
}


/* -------------------------
   Modiseh
------------------------- */

async function getModisehArticles() {
  const response = await fetch(MODISEH_FEED);

  if (!response.ok) {
    throw new Error("Failed to fetch Modiseh articles");
  }

  const xmlText = await response.text();

  const parser = new DOMParser();
  const xml = parser.parseFromString(
    xmlText,
    "application/xml"
  );

  const items = Array.from(xml.querySelectorAll("item"));

  return items.map((item, index) => {
    const title =
      item.querySelector("title")?.textContent || "";

    const link =
      item.querySelector("link")?.textContent || "";

    const date =
      item.querySelector("pubDate")?.textContent || "";

    const description =
      item.querySelector("description")?.textContent || "";

    const content =
      item.querySelector("encoded")?.textContent || "";

    // Find the first image inside the article content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const firstImage = tempDiv.querySelector("img");

    const image = firstImage?.getAttribute("src") || "";

    const imageAlt =
      firstImage?.getAttribute("alt") ||
      title;

    return {
      id: `modiseh-${index}`,
      title,
      excerpt: description,
      content,
      date,
      slug: link,
      sourceUrl: link,
      image,
      imageAlt,
      source: "Modiseh",
    };
  });
}


/* -------------------------
   All Articles
------------------------- */

export async function getArticles() {
  const results = await Promise.all([
    getModeWorldArticles(),
    getIranModelingArticles(),
  ]);

  const allArticles = results.flat();

  // Remove articles without an image
  const articlesWithImages = allArticles.filter(
    (article) => article.image
  );

  // Newest articles first
  articlesWithImages.sort(
    (a, b) =>
      new Date(b.date) - new Date(a.date)
  );

  return articlesWithImages;
}