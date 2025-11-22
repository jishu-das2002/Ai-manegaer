import React from "react";
import { useLoaderData, Link } from "react-router";

const AllModels = () => {
  const models = useLoaderData(); 

  return (
    <div className="p-10 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700">
        All AI Models
      </h1>

      {models.length === 0 ? (
        <p className="text-center text-gray-600">No models found...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div
              key={model._id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition transform duration-300"
            >
              {/* MODEL IMAGE */}
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-56 object-cover"
              />

              {/* MODEL CONTENT */}
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">
                  {model.name}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Framework:</span>{" "}
                  <span className="text-indigo-600">{model.framework}</span>
                </p>

                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-medium">Use Case:</span> {model.useCase}
                </p>

                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-medium">Dataset:</span> {model.dataset}
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  {model.description.slice(0, 80)}...
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  Created: {new Date(model.createdAt).toLocaleDateString()}
                </p>

                <p className="text-sm text-green-700 font-semibold mt-2">
                  Purchased: {model.purchased} times
                </p>

                {/* DETAILS BUTTON */}
                <Link
                  to={`/models/${model._id}`}
                  className="mt-4 block text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllModels;
