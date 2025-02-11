import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import season from "../assets/images/season.jpg"

export default function Hero() {
  return (
    <section
    className="relative h-screen flex items-center justify-center bg-black text-white"
    style={{ backgroundImage: `url(${season})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
    >
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:bottom-4 md:right-1/2 md:translate-x-1/2 md:top-auto">
        <a href="https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] text-3xl hover:scale-125 transition-transform duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/CAPTAINRAJ19" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-3xl hover:scale-125 transition-transform duration-300">
          <FaGithub />
        </a>
        <a href="https://x.com/DhruvRa48929519" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] text-3xl hover:scale-125 transition-transform duration-300">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/captainraj_19/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-3xl hover:scale-125 transition-transform duration-300">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@dhruvrajsingh9055" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] text-3xl hover:scale-125 transition-transform duration-300">
          <FaYoutube />
        </a>
      </div>

      {/* Center Content */}
      <div className="text-center w-60 md:w-auto">
        <h1 style={{fontFamily:"orbitron"}} className="text-5xl font-bold text-[#fcfcfc] mb-24">Welcome to DhruvBlogs</h1>
        <p className="mt-4 text-lg text-gray-300">Sharing insights, thoughts, and experiences.</p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-[#39ff14] text-black rounded-lg hover:bg-[#32cc12] transition-all duration-300">
          Explore Now
        </button>
      </div>
    </section>
  );
}
