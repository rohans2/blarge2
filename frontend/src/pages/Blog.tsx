import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Fullblog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import { BlogIdSkeleton } from "../components/BlogSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog, failed } = useBlog({
    id: id || "",
  });
  const navigate = useNavigate();
  if (loading) {
    return (
      <div>
        <AppBar />
        <div>
          <BlogIdSkeleton />
        </div>
      </div>
    );
  }
  if (failed || !blog) {
    navigate("/signin");
    return;
  }
  return (
    <div>
      <Fullblog blog={blog} />
    </div>
  );
};
