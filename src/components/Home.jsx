import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [models, setModels] = useState([]);

  // Fetch Latest 6 Models
  useEffect(() => {
    fetch("http://localhost:5000/models?limit=6&sort=desc") 
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-16 p-6 md:p-12">

      {/* ---------------- DYNAMIC FEATURED SECTION ---------------- */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured AI Models</h2>

        {models.length === 0 ? (
          <p>Loading models...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model._id}
                className="border rounded-xl shadow p-5 bg-white"
              >
                <h3 className="text-xl font-semibold">{model.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Framework: {model.framework}
                </p>
                <p className="text-gray-700">
                  {model.description.slice(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ---------------- STATIC SECTION 1: ABOUT ---------------- */}
      <section>
        <h2 className="text-3xl font-bold mb-4">About AI Models</h2>
        <p className="text-gray-700 leading-relaxed">
          AI models are programs trained to perform intelligent tasks. They are
          commonly built using neural networks, which learn patterns from large
          datasets. These models power real-world applications such as chatbots,
          recommendation systems, fraud detection, and image recognition.
          Managing AI models helps developers track versions, frameworks, and
          performance, making it easier to deploy and update them.
        </p>
      </section>

      {/* ---------------- STATIC SECTION 2: GET STARTED ------------ */}
      <section className="bg-gray-100 p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-700 mb-6">
          Create an account to start managing your AI models and build powerful
          machine learning applications.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Register Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
