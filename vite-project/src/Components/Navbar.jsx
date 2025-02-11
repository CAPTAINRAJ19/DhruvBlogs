import { useState } from "react";
import { useNavigate , useLocation } from 'react-router-dom'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item) => {
    if (item === "POST") navigate("/post");
    if (item === "BLOGS") navigate("/blogs");
    if (item === "HOME") navigate("/");


    if (item === "ABOUT" || item === "CONTACT") {
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll after the page loads
        navigate("/", { replace: false });
        setTimeout(() => {
          document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Scroll directly if already on "/"
        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  

  return (
    <nav  className="bg-black text-white py-4  shadow-md">
      <div className="container ml-10 mr-0 flex justify-between items-center">
        <h1 style={{fontFamily:"orbitron"}} className="text-2xl px-1.5 rounded-xl border-2 font-bold text-[#c6ccb2]">DhruvBlogs</h1>

        <ul style={{fontFamily:"corben"}} className="hidden md:flex space-x-6">
          {["HOME", "ABOUT", "CONTACT", "POST", "BLOGS"].map((item) => (
            <li
              key={item}
              className="relative text-lg cursor-pointer border-b-2 border-transparent transition-all duration-300 hover:border-[#39ff14] hover:text-[#39ff14]"

              onClick={() => handleNavigation(item)}
              >
                {item}
              </li>
            ))}
            
        </ul>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-black text-center py-4 space-y-4">
          {["HOME", "ABOUT", "CONTACT", "POST", "BLOGS"].map((item) => (
            <li
              key={item}
              className="text-lg cursor-pointer border-b-2 border-transparent transition-all duration-300 hover:border-[#39ff14] hover:text-[#39ff14]"
              onClick={() => handleNavigation(item)}
              
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
