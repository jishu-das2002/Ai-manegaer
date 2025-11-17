import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: ""
  });

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের অক্ষর থাকতে হবে");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("পাসওয়ার্ডে কমপক্ষে একটি ছোট হাতের অক্ষর থাকতে হবে");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, photoURL, password } = formData;

    if (!validatePassword(password)) return;

    createUserWithEmailAndEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL
        });

        toast.success("রেজিস্ট্রেশন সফল হয়েছে!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Email already in use");
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-In Successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Sign-In Failed");
      });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Register for AI Model Inventory Manager
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>

      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
