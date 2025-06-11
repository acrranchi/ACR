import React, { useState, useEffect } from "react";
import axios from "axios";
import bg from "../assets/3607424.jpg";
import Navbar from "../components/Navbar"; // Added missing Navbar import
import Footer from "../components/Footer"; // Added missing Navbar import

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general"); // Default category

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=6da8c7dffa7f6caa6e8ff38feabdf55e",
          {
            params: {
              country: "in",
              category: category,
              apiKey: "6da8c7dffa7f6caa6e8ff38feabdf55e",
              pageSize: 12,
            },
          }
        );
        setNews(response.data.articles);
        setError(null);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Failed to fetch news"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );

  return (
    <div
              className="bg-cover bg-center bg-fixed w-full min-h-screen pt-2 overflow-x-hidden"
              style={{ backgroundImage: `url(${bg})` }}
            >

      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-8">Latest News</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full capitalize ${
                category === cat
                  ? "bg-black border-cyan-400 border-2 text-white"
                  : "bg-black-200 hover:bg-gray-500 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-900/60 to-gray-900/60 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200?text=No+Image";
                  }}
                />
              )}
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 line-clamp-2 text-cyan-400">
                  {article.title}
                </h3>
                <p className="text-white mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white">
                    {article.source?.name}
                  </span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default News;
