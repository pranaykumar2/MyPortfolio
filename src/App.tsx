import { useState } from 'react';
import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    MailIcon,
    SunIcon,
    MoonIcon,
} from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSectionClick = (section: string) => {
        setActiveSection(section);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <nav className={`fixed top-0 left-0 w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} backdrop-blur-sm bg-opacity-80 p-4 shadow-md`}>
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">Kumar Raja</div>
                    <ul className="flex space-x-6">
                        <li
                            onClick={() => handleSectionClick('home')}
                            className={`cursor-pointer ${activeSection === 'home' ? 'text-blue-500' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            <HomeIcon size={24} />
                        </li>
                        <li
                            onClick={() => handleSectionClick('about')}
                            className={`cursor-pointer ${activeSection === 'about' ? 'text-blue-500' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            <UserIcon size={24} />
                        </li>
                        <li
                            onClick={() => handleSectionClick('portfolio')}
                            className={`cursor-pointer ${activeSection === 'portfolio' ? 'text-blue-500' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            <BriefcaseIcon size={24} />
                        </li>
                        <li
                            onClick={() => handleSectionClick('contact')}
                            className={`cursor-pointer ${activeSection === 'contact' ? 'text-blue-500' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            <MailIcon size={24} />
                        </li>
                    </ul>
                    <button onClick={toggleTheme} className="ml-4">
                        {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
                    </button>
                </div>
            </nav>

            <main className="mt-20 px-4 flex-1">
                {activeSection === 'home' && (
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Kumar Raja</h1>
                        <h2 className="text-2xl font-semibold mb-2">Web Designer & Developer</h2>
                        <p className="max-w-2xl mx-auto">
                            I’m a passionate web designer and developer specializing in creating beautiful and functional websites. My work focuses on delivering user-friendly experiences that combine creative design with innovative technology.
                        </p>
                    </div>
                )}

                {activeSection === 'about' && (
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">About Me</h1>
                        <p className="mb-4">
                            I have a background in web development with a strong focus on front-end technologies. My journey began with a fascination for design and technology, which led me to pursue a career in web development. Over the years, I've honed my skills in HTML, CSS, JavaScript, and React, allowing me to build dynamic, responsive websites.
                        </p>
                        <h2 className="text-2xl font-semibold mb-3">Education</h2>
                        <p className="mb-4">Bachelor's Degree in Computer Science from Vignan University</p>
                        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
                        <ul className="list-disc list-inside">
                            <li>HTML, CSS, JavaScript, TypeScript</li>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Responsive Design</li>
                            <li>Version Control with Git</li>
                        </ul>
                    </div>
                )}

                {activeSection === 'portfolio' && (
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6 text-center">My Portfolio</h1>
                        <Slider
                            dots={true}
                            infinite={true}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            className="portfolio-slider"
                        >
                            <div className="p-4">
                                <img src="project1.jpg" alt="Project 1" className="max-w-xs max-h-xs w-auto h-auto rounded-md shadow-md mb-4" />
                                <h3 className="text-xl font-semibold">Project 1</h3>
                                <p>
                                    A brief description of Project 1. You can include what technologies were used and what problem it solves.
                                </p>
                            </div>
                            <div className="p-4">
                                <img src="project2.jpg" alt="Project 2" className="max-w-xs max-h-xs w-auto h-auto rounded-md shadow-md mb-4" />
                                <h3 className="text-xl font-semibold">Project 2</h3>
                                <p>
                                    A brief description of Project 2. You can include what technologies were used and what problem it solves.
                                </p>
                            </div>
                            {/* Add more slides as needed */}
                        </Slider>
                    </div>
                )}

                {activeSection === 'contact' && (
                    <div className="min-h-screen flex items-center justify-center">
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
                )}
            </main>
        </div>
    );
};

export default Portfolio;