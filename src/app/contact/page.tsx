"use client";  // Ensure this is at the top

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Using FormData to get input values
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    console.log("Form submitted:", data);
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
