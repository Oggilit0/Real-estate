const BlogSummary = ({item}) => {
  return (
    <div id = "blogSummary">
      <h1>{item.title}</h1>
      <p>{item.date}</p>
      <p>{item.author}</p>
    
      <div>{item.previewText}</div>

      
    </div>
  );
};

export default BlogSummary;