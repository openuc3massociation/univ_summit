import { Link } from "react-router-dom";
import { BlogPost } from "../blog-data/blogData";
import "../styles/components/BlogCard.css";

type Props = {
  post: BlogPost;
};

const BlogCard = ({ post }: Props) => (
  <div className="blog-card">
    <div className="blog-image-container">
      <img src={post.image} alt={post.title} className="blog-image" />
    </div>
    <div className="blog-content">
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-summary">{post.summary}</p>
      <Link to={`/blog/${post.slug}`} className="blog-link">
        Leer más →
      </Link>
    </div>
  </div>
);

export default BlogCard;
