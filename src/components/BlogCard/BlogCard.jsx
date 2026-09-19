const BlogCard = ({ article }) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white">
      {article.image && (
        <img
          src={article.image}
          alt={article.imageAlt}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      )}

      <div className="p-5 text-right">
        <p className="mb-2 text-sm text-gray-400">
          {new Date(article.date).toLocaleDateString("fa-IR")}
        </p>

        <h2
          className="mb-3 text-xl font-semibold leading-8 text-gray-900"
          dangerouslySetInnerHTML={{
            __html: article.title,
          }}
        />

        <div
          className="mb-5 line-clamp-3 text-sm leading-7 text-gray-500"
          dangerouslySetInnerHTML={{
            __html: article.excerpt,
          }}
        />

        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-gray-900 transition hover:opacity-60"
        >
          مطالعه مقاله
        </a>
      </div>
    </article>
  );
};

export default BlogCard;