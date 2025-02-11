import { FaUser, FaDownload, FaRocket } from "react-icons/fa";
import { useNavigate , useLocation } from 'react-router-dom'

export default function About() {
  
  const navigate = useNavigate();

  const handleDownload = () => {
    const resumeUrl = "/Dhruv_Resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Dhruv_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-black text-white">
      {/* About Section */}
      <div id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16">
        <FaUser className="text-7xl text-[#f9f9f9] mb-4 animate-pulse" />
        <h2 style={{fontFamily:"syncopate"}} className="text-5xl font-extrabold text-[#0a84ff] tracking-wider">Who Am I?</h2>
        <p style={{fontFamily:"gruppo"}} className="mt-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
          Welcome to <span className="text-[#39ff14] font-semibold">DhruvBlogs</span>! I’m Dhruv , a tech enthusiast, content creator, and problem solver.
          I love exploring new technologies, writing about my experiences, and helping others learn through engaging content.
        </p>
        <p style={{fontFamily:"gruppo"}} className="mt-4 max-w-3xl text-lg text-gray-300 leading-relaxed">
          Here, you’ll find insights on web development, AI, and coding best practices. Join me on this journey as we uncover 
          exciting tech trends and build cool projects!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-6">
          <button 
            onClick={handleDownload} 
            className="px-6 py-3 text-lg font-semibold bg-[#39ff14] text-black rounded-lg hover:bg-[#32cc12] transition-all duration-300 flex items-center space-x-2"
          >
            <FaDownload /> <span>Download Resume</span>
          </button>
          <button onClick={()=>{
            navigate("/blogs")}
          } className="px-6 py-3 text-lg font-semibold bg-[#0a84ff] text-white rounded-lg hover:bg-[#0867cc] transition-all duration-300 flex items-center space-x-2">
            <FaRocket /> <span>Explore Blogs</span>
          </button>
        </div>
      </div>
    </section>
  );
}
