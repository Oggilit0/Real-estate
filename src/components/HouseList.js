import HouseSummary from "./HouseSummary";

const HouseList = ({ post }) => {
  if (!post || post.length === 0) {
    return <p></p>;
  }
  return (
    <>
      {post.map((item) => (
        <HouseSummary key={item.id} item={item} />
      ))}
    </>
  );
};

export default HouseList;
