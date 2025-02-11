import { useEffect, useState } from "react";
import { FaLaptopCode, FaBook, FaPenFancy, FaLightbulb, FaFire, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Fetch blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/blogs");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle upvote functionality
  const handleUpvote = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/upvote/${id}`, {
        method: "PATCH",
      });

      if (response.ok) {
        alert("✅ Your upvote was monitored!");
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog._id === id ? { ...blog, upvotes: blog.upvotes + 1 } : blog
          )
        );
      } else {
        console.error("Failed to upvote blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Define category styles and icons
  const categoryStyles = {
    "Tech related": { color: "#39ff14", icon: <FaLaptopCode /> },
    "General Knowledge": { color: "#ffcc00", icon: <FaBook /> },
    Poetic: { color: "#ff66cc", icon: <FaPenFancy /> },
    Informational: { color: "#00ccff", icon: <FaLightbulb /> },
    Trending: { color: "#ff4500", icon: <FaFire /> },
    None: { color: "#f3a712", icon: "📝" },
  };

  return (
    <>
      <Navbar />
      <section className="bg-black text-white min-h-screen p-10">
        <h2 className="text-4xl font-bold text-[#39ff14] text-center mb-6">Published Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => {
            const categoryStyle = categoryStyles[blog.category] || categoryStyles["None"];

            return (
              <div
                key={blog._id}
                className="p-5 rounded-lg overflow-hidden` shadow-lg transition-transform transform hover:scale-105"
                style={{ backgroundColor: categoryStyle.color, color: "#000" }}
              >
                {/* Category Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{categoryStyle.icon}</span>
                  <span className="text-xs font-bold">{blog.language}</span>
                </div>

                {/* Blog Content */}
                <h3 className="text-xl font-bold mt-2">{blog.author}</h3>
                <div className="mt-2" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                {/* Hashtags */}
                <div className="mt-3">
                  {blog.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-blue-600 bg-white px-2 py-1 rounded-md text-sm font-semibold mr-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Upvote Button */}
                <button
                  onClick={() => handleUpvote(blog._id)}
                  className="mt-4 flex items-center space-x-2 px-4 py-2 bg-black text-[#39ff14] border-2 border-[#39ff14] rounded-lg hover:bg-[#39ff14] hover:text-black transition-all"
                >
                  <FaArrowUp /> <span>Upvote ({blog.upvotes})</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
