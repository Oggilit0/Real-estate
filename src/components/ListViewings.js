import JSONDATA from "../mock-data.json";

const ListViewings = (value) => {

  return (
    <div>
      {JSONDATA.filter((val) => {
        if (val.Address.includes(value.name)) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.Address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListViewings;