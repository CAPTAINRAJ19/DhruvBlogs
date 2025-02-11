import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Post() {
  const navigate = useNavigate();
  const editor = useRef(null);

  const [post, setPost] = useState({
    author: "",
    language: "",
    category: "None",
    hashtags: [],
    upvotes: 0, 
  });

  const [hashtagInput, setHashtagInput] = useState("");
  const editorContent = useRef(""); 

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleEditorBlur = () => {
    setPost({ ...post, content: editorContent.current });
  };

  const addHashtag = () => {
    if (hashtagInput.trim() !== "") {
      setPost({ ...post, hashtags: [...post.hashtags, hashtagInput.trim()] });
      setHashtagInput("");
    }
  };

  const removeHashtag = (index) => {
    const updatedHashtags = post.hashtags.filter((_, i) => i !== index);
    setPost({ ...post, hashtags: updatedHashtags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      author: post.author || "Unknown",
      upvotes: 0, 
    };

    try {
        const response = await fetch("http://localhost:8000/api/post", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
          });
          

      if (response.ok) {
        navigate("/blogs");
      } else {
        console.error("Error submitting post:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to connect to server:", error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl my-10 bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#39ff14] mb-6 text-center">
            Create a New Post
          </h2>

          <input
            type="text"
            name="author"
            placeholder="Author Name (Leave empty for Unknown)"
            value={post.author}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4 border border-gray-700 focus:border-[#39ff14] focus:ring-[#39ff14] focus:outline-none"
          />

          <input
            type="text"
            name="language"
            placeholder="Language"
            value={post.language}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4 border border-gray-700 focus:border-[#39ff14] focus:ring-[#39ff14] focus:outline-none"
          />

          <select
            name="category"
            value={post.category}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4 border border-gray-700 focus:border-[#39ff14] focus:ring-[#39ff14] focus:outline-none"
          >
            <option value="None">None</option>
            <option value="Tech related">Tech Related</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Poetic">Poetic</option>
            <option value="Informational">Informational</option>
            <option value="Trending">Trending</option>
          </select>

          {/* Jodit Text Editor */}
          <JoditEditor
            ref={editor}
            value={editorContent.current} // ✅ Use ref to prevent unnecessary re-renders
            onChange={(newContent) => (editorContent.current = newContent)}
            onBlur={handleEditorBlur} // ✅ Save content only when user finishes typing
            config={{
              theme: "dark",
              placeholder: "Write your post here...",
            }}
          />

          <div className="mt-4">
            <h3 className="text-lg text-[#39ff14] font-semibold mb-2">
              Hashtags
            </h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Add a hashtag"
                value={hashtagInput}
                onChange={(e) => setHashtagInput(e.target.value)}
                className="flex-1 p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#39ff14] focus:ring-[#39ff14] focus:outline-none"
              />
              <button
                type="button"
                onClick={addHashtag}
                className="px-4 py-2 bg-[#39ff14] text-black font-semibold rounded-lg hover:bg-[#32cc12] transition-all duration-300"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap mt-3">
              {post.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#0a84ff] text-white px-3 py-1 rounded-lg text-sm mr-2 mb-2 flex items-center space-x-2"
                >
                  <span>#{tag}</span>
                  <button
                    onClick={() => removeHashtag(index)}
                    className="ml-2 text-black font-bold"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-6 w-full px-6 py-3 text-lg font-semibold bg-[#39ff14] text-black rounded-lg hover:bg-[#32cc12] transition-all duration-300"
          >
            Submit Post
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
