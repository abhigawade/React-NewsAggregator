import React from "react";

export const Card = ({ title, description, source, urlToImage, publishedAt, readMoreUrl }) => {
  return (
    <div className="max-w-sm mx-auto h-[60vh] w-[500px]">
      <article className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={urlToImage || "/placeholder.svg"}
            alt={title}
          />
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold uppercase py-1 px-2">
            Breaking News
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">
          {title?.slice(0,20) || "No Title Available"}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
          {description?.slice(0,100) || "No description available"}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">5 hours ago</span>
            <a
              href={readMoreUrl}
              target="_blank"
              className="inline-block bg-blue-600 text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
