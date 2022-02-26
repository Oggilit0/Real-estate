import HouseSummary from "./HouseSummary";

const HouseList = ({ post }) => {
  if (!post || post.length === 0) {
    return <p></p>;
  }
  return (
    <>
      {post.map((item) => (
        <HouseSummary item={item} />
      ))}
    </>
  );
};

export default HouseList;
