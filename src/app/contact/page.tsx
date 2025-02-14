"use client";  // Ensure this is at the top
import React from 'react';
import { createClient } from "@sanity/client";

// ✅ Sanity Client Setup
const sanityClient = createClient({
  projectId: "6qhqyt37", // Replace with your actual Sanity Project ID
  dataset: "production", // Change if you are using another dataset
  apiVersion: "2024-02-14",
  useCdn: false,
  token: "sksu0jrqrOLCv74iY4lMyQfJbXus305js5AFQ9TTF3P7SM3N1g69KqmHXEExr90CwC1nTBTNZRqoPoIyf3U0NftYGy4HoxI60RTuVVA8Wogr4tH0sbO700F1f4B015zM580pSi10BOlK1xYKRCLeOFSTR5SFmjMMYygGVezSHYP5Xg1r4PfG", // Add a Sanity API token with write permissions
});

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      _type: "contact", // Must match your Sanity schema type
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      await sanityClient.create(data);
      console.log("✅ Message sent successfully!");
      alert("Your message has been sent successfully!");
      e.currentTarget.reset(); // Clear form fields
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-neon-green flex items-center justify-center p-6">
      <form
        className="w-full max-w-lg border border-neon-green p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>

        <label htmlFor="name" className="block mt-4">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full p-2 bg-gray-800 text-white rounded"
          required
          placeholder="Enter your name"
        />

        <label htmlFor="email" className="block mt-4">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-2 bg-gray-800 text-white rounded"
          required
          placeholder="Enter your email"
        />

        <label htmlFor="message" className="block mt-4">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 bg-gray-800 text-white rounded"
          rows={4}
          required
          placeholder="Write your message here..."
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-neon-green text-black px-4 py-2 rounded-lg w-full hover:bg-green-400 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}