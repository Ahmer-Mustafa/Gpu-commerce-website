"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Graphics Cards",
      description: "Exploring the next generation of GPUs and what they mean for gamers and creators.",
      image: "/images/gpu-future.jpg",
    },
    {
      id: 2,
      title: "Ray Tracing Revolution",
      description: "How ray tracing is transforming gaming visuals into cinematic experiences.",
      image: "/images/ray-tracing.jpg",
    },
    {
      id: 3,
      title: "Overclocking 101",
      description: "A beginner’s guide to safely pushing your GPU’s performance to the max.",
      image: "/images/overclocking.jpg",
    },
    {
      id: 4,
      title: "AMD vs NVIDIA: The Ultimate Battle",
      description: "Comparing the latest GPUs from the two industry giants to see who comes out on top.",
      image: "/images/amd-vs-nvidia.jpg",
    },
    {
      id: 5,
      title: "Best Budget Graphics Cards in 2024",
      description: "A detailed breakdown of the most powerful GPUs for budget-conscious gamers.",
      image: "/images/budget-gpus.jpg",
    },
    {
      id: 6,
      title: "Cyberpunk Aesthetic in Gaming",
      description: "How cyberpunk culture has influenced modern gaming and PC building trends.",
      image: "/images/cyberpunk-gaming.jpg",
    },
    {
      id: 7,
      title: "How to Build a Future-Proof PC",
      description: "A step-by-step guide to assembling a PC that will stand the test of time.",
      image: "/images/future-proof-pc.jpg",
    },
    {
      id: 8,
      title: "AI and GPUs: The Next Frontier",
      description: "Understanding the role of GPUs in powering artificial intelligence applications.",
      image: "/images/ai-gpu.jpg",
    },
    {
      id: 9,
      title: "Liquid Cooling vs Air Cooling for GPUs",
      description: "A deep dive into cooling solutions to keep your graphics card performing at its best.",
      image: "/images/cooling-gpu.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-neon-green flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center border-b-2 border-neon-green pb-4">
          Latest Blog Posts
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog) => (
            <div
              key={blog.id} // ✅ Unique key is assigned correctly
              className="bg-gray-900 p-4 rounded-lg shadow-lg border border-neon-green"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold mt-4">{blog.title}</h2>
              <p className="text-gray-400 mt-2">{blog.description}</p>
              <button className="mt-4 bg-neon-green hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-full shadow-md">
                Read More
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
