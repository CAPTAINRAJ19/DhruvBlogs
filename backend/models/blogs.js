const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  author: { type: String, default: "Unknown" },
  language: { type: String, required: true },
  category: {
    type: String,
    enum: ["Tech related", "General Knowledge", "Poetic", "Informational", "Trending", "None"],
    default: "None",
  },
  content: { type: String, required: true },
  hashtags: { type: [String], default: [] },
  upvotes: { type: Number, default: 0 }, // ✅ Added Upvotes Field
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
