import React from 'react';
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const Home = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=21025d1583d44ba6a0575f90b9d68ac0`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className={`w-full overflow-hidden ${loading ? "bg-gray-100" : "bg-gray-900"}`}>
      <div className="max-w-7xl mx-auto mt-4">
        {loading ? (
          // Loader Section
          <div className="flex justify-center items-center h-64">
            <div className="loader">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          // News Articles Section
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                title={article.title}
                description={article.description}
                urlToImage={
                  article.urlToImage || "https://via.placeholder.com/300"
                }
                source={article.source.name}
                publishedAt={article.publishedAt}
                readMoreUrl={article.url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
