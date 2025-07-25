import BlogCard from "../components/BlogCard";
import { blogPosts } from "../blog-data/blogData";

const BlogList = () => (
  <main>
    <h2 className="blog-list-h2">Todos los artículos</h2>
    <div className="blog-list">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  </main>
);

export default BlogList;
