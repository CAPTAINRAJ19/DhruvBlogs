const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const Blog = require("./models/blogs.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
// Define Router
const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    console.log("📩 Received Post Data:", req.body); // ✅ Debugging
    const newPost = new Blog(req.body);
    await newPost.save();
    res.status(201).json({ message: "✅ Blog post created!", post: newPost });
  } catch (error) {
    console.error("❌ Error creating post:", error);
    res.status(500).json({ message: "Error creating post", error });
  }
});



// Route to fetch all blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
});

// Route to upvote a blog
router.patch("/upvote/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.upvotes += 1;
    await blog.save();
    
    res.status(200).json({ message: "Upvote added!", blog });
  } catch (error) {
    res.status(500).json({ message: "Error upvoting blog", error });
  }
});

app.use("/api", router);
