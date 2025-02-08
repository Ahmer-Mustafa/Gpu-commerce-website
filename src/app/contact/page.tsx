"use client";  // Ensure this is at the top

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Using FormData to get input values
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-black text-neon-green flex items-center justify-center p-6">
      <form className="w-full max-w-lg border border-neon-green p-6 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>

        <label className="block mt-4">Name</label>
        <input type="text" name="name" className="w-full p-2 bg-gray-800 text-white rounded" required />

        <label className="block mt-4">Email</label>
        <input type="email" name="email" className="w-full p-2 bg-gray-800 text-white rounded" required />

        <label className="block mt-4">Message</label>
        <textarea name="message" className="w-full p-2 bg-gray-800 text-white rounded" rows={4} required></textarea>

        <button type="submit" className="mt-4 bg-neon-green text-black px-4 py-2 rounded-lg w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
