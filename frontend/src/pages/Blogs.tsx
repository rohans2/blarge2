import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs, failed } = useBlogs();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  if (failed) {
    navigate("/signin");
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content
                .replace(/<[^>]*(>|$)| |‌|»|«|>/g, " ")
                .replace(/&/g, "&")}
              publishedDate="May 16 2024"
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
