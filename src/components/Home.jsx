import React from "react";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  // Loader থেকে ডেটা রিসিভ
  const model = useLoaderData();

  // শুধু প্রথম 6টি data
  const aimodel = model.slice(0, 6);

  return (
    <div className="bg-gradient-to-r from-amber-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="space-y-16 p-6 md:p-12">

        {/* DYNAMIC FEATURED SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Featured AI Models</h2>

          {aimodel.length === 0 ? (
            <p className="text-center text-gray-600">No models found...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {aimodel.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition transform duration-300"
                >
                  {/* MODEL IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  {/* MODEL CONTENT */}
                  <div className="p-5">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Framework:</span>{" "}
                      <span className="text-indigo-600">{item.framework}</span>
                    </p>

                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-medium">Use Case:</span> {item.useCase}
                    </p>

                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-medium">Dataset:</span> {item.dataset}
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      {item.description.slice(0, 80)}...
                    </p>

                    <p className="text-xs text-gray-500 mt-2">
                      Created: {new Date(item.createdAt).toLocaleDateString()}
                    </p>

                    <p className="text-sm text-green-700 font-semibold mt-2">
                      Purchased: {item.purchased} times
                    </p>

                    {/* DETAILS BUTTON */}
                    <Link
                      to={`/models/${item._id}`}
                      className="mt-4 block text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* STATIC SECTION 1 */}
        <section>
          <h2 className="text-3xl font-bold mb-4">About AI Models</h2>
          <p className="text-gray-700 leading-relaxed">
            AI models are programs trained to perform intelligent tasks...
          </p>
        </section>

        {/* STATIC SECTION 2 */}
        <section className="bg-gradient-to-r from-blue-200 to-cyan-200 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-6">
            Create an account to start managing your AI models...
          </p>

          <Link
            to="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Register Now
          </Link>
        </section>

      </div>
    </div>
  );
};

export default Home;
