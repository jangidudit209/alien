
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-20 px-4 bg-gray-100 text-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact / Register</h2>
        {submitted ? (
          <p className="text-xl text-green-600">Thank you for registering!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full px-4 py-2 border rounded"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
