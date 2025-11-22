import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddModel = () => {
  const [formData, setFormData] = useState({
    name: "",
    framework: "",
    useCase: "",
    dataset: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/ai-model", formData);

      if (res.data.success) {
        toast.success("AI Model Added Successfully!");
        setFormData({
          name: "",
          framework: "",
          useCase: "",
          dataset: "",
          description: "",
          image: ""
        });
      }
    } catch (error) {
      toast.error("Failed to add model!");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New AI Model</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input 
          type="text" 
          name="name"
          placeholder="Model Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input 
          type="text" 
          name="framework"
          placeholder="Framework (TensorFlow, PyTorch...)"
          className="w-full p-2 border rounded"
          value={formData.framework}
          onChange={handleChange}
          required
        />

        <input 
          type="text" 
          name="useCase"
          placeholder="Use Case (NLP, Vision, Chatbot...)"
          className="w-full p-2 border rounded"
          value={formData.useCase}
          onChange={handleChange}
          required
        />

        <input 
          type="text" 
          name="dataset"
          placeholder="Dataset Name"
          className="w-full p-2 border rounded"
          value={formData.dataset}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Model Description"
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <input 
          type="text" 
          name="image"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700"
        >
          Add Model
        </button>
      </form>
    </div>
  );
};

export default AddModel;
