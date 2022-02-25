import HouseSummary from "./HouseSummary";

const HouseList = ({ post }) => {
  if (!post || post.length === 0) {
    return <p></p>;
  }
  return (
    <div id="houselist">
      {post.map((item) => (
        <HouseSummary item={item} />
      ))}
    </div>
  );
};

export default HouseList;
