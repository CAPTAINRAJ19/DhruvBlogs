import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter, FaInstagram, FaReddit } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-8  border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Thank You Message */}
        <h2 className="text-2xl font-bold text-[#14ffef] mb-4">
          🎉 Thanks for visiting! Here’s more of me if you're interested:
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg mb-6">
          <p className="flex items-center gap-2">
            <MdEmail className="text-[#ff5733] text-2xl" />
            <span className="hover:text-[#39ff14] transition">dhruvrajsingh.1019@gmail.com</span>
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-[#ff5733] text-2xl" />
            <span className="hover:text-[#39ff14] transition">dhruvrajsingh_22191@aitpune.edu.in</span>
          </p>
          <p className="flex items-center gap-2">
            <MdPhone className="text-[#39ff14] text-2xl" />
            <span className="hover:text-[#39ff14] transition">+123 456 7890</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://github.com/CAPTAINRAJ19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#39ff14] transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@dhruvrajsingh9055" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition">
            <FaYoutube />
          </a>
          <a href="https://x.com/DhruvRa48929519" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/captainraj_19/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition">
            <FaInstagram />
          </a>
          <a href="https://www.reddit.com/user/CaptainRaj_19/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF4500] transition">
            <FaReddit />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} CaptainRaj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
