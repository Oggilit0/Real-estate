import BlogSummary from "./BlogSummary";

const BlogList = ({ post }) => {
  if (!post || post.length === 0) {
    return <p></p>;
  }
  return (
    <div id="blogList">
      {post.map((item) => <BlogSummary key={item.id} item={item} />).reverse()}
    </div>
  );
};

export default BlogList;
