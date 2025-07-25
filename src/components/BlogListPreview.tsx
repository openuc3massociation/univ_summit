import BlogCard from "./BlogCard";
import { blogPosts } from "../blog-data/blogData";

const BlogListPreview = () => {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="blog-list-h2">Últimos artículos</h2>

        <div
          className={`blog-list ${latest.length === 1 ? "single" : ""}`}
        >
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPreview;
