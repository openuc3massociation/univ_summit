import { useParams } from "react-router-dom";
import { blogPosts } from "../blog-data/blogData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post no encontrado</p>;

  return (
    <>
    <Header />
        <article>
        <h1>{post.title}</h1>
        <p><em>{post.date}</em></p>
        <img src={post.image} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    <Footer />
    </>
  );
};

export default BlogPost;
