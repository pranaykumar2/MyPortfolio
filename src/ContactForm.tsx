import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6 transform transition duration-500 hover:scale-105"
            >
                <h1 className="text-4xl font-bold text-white text-center mb-6">Contact Me</h1>
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="relative">
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="relative">
          <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-500 transition duration-300"
          />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;