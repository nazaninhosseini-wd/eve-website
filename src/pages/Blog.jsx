import { useEffect, useState } from "react";

import { getArticles } from "../services/blogApi";
import BlogCard from "../components/BlogCard/BlogCard";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 9;

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await getArticles();

        const articlesWithImages = data.filter(
          (article) => article.image
        );

        setArticles(articlesWithImages);
      } catch (error) {
        console.error(error);
        setError("Unable to load articles.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-20">
        <p dir="rtl" className="float-right text-right">
          در حال بارگذاری مقالات...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 py-20">
        <p>{error}</p>
      </section>
    );
  }

  const totalPages = Math.ceil(
    articles.length / articlesPerPage
  );

  const startIndex =
    (currentPage - 1) * articlesPerPage;

  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <main
      dir="rtl"
      className="container mx-auto px-4 py-16"
    >
      <h1 className="mb-10 text-4xl font-bold">
        مجله مد ایو
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentArticles.map((article) => (
          <BlogCard
            key={article.id}
            article={article}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">

          <button
            onClick={() =>
              setCurrentPage((page) => page - 1)
            }
            disabled={currentPage === 1}
            className="rounded-full border px-5 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            قبلی
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`h-10 w-10 rounded-full border transition ${
                currentPage === page
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((page) => page + 1)
            }
            disabled={currentPage === totalPages}
            className="rounded-full border px-5 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            بعدی
          </button>

        </div>
      )}
    </main>
  );
};

export default Blog;