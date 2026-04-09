import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      
      <div className="text-center max-w-lg">
        
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl border border-gray-500 hover:bg-gray-700 transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative */}
        <div className="mt-10 text-gray-600 text-sm">
          Error code: 404 | Lost in space 🚀
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;