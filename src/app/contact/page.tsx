import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-neon-green flex items-center justify-center p-6">
      <form className="w-full max-w-lg border border-neon-green p-6 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>

        <label className="block mt-4">Name</label>
        <input type="text" name="name" className="w-full p-2 bg-gray-800 text-white rounded" onChange={handleChange} />

        <label className="block mt-4">Email</label>
        <input type="email" name="email" className="w-full p-2 bg-gray-800 text-white rounded" onChange={handleChange} />

        <label className="block mt-4">Message</label>
        <textarea name="message" className="w-full p-2 bg-gray-800 text-white rounded" rows={4} onChange={handleChange}></textarea>

        <button type="submit" className="mt-4 bg-neon-green text-black px-4 py-2 rounded-lg w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
