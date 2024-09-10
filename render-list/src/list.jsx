import proptypes from "prop-types";
function List(pros) {
  //   const fruits = [
  //     { name: "apple", calories: 95 },
  //     { name: "orange", calories: 105 },
  //     { name: "banana", calories: 120 },
  //     { name: "coconut", calories: 75 },
  //     { name: "pineapple", calories: 50 },
  //   ];

  //fruits.sort((a,b) => a.name.localeCompare(b.name));
  //const newlist = fruits.filter((fruit) => fruit.calories >= 100);

  const itemlist = pros.items;
  const category = pros.catagories;
  const listitems = itemlist.map((temp) => (
    <li key={temp.name}>
      {temp.name} : {temp.calories}
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ul>{listitems}</ul>
    </>
  );
}

List.proptypes = {
  catagories: proptypes.string,
  items: proptypes.arrayOf(
    proptypes.shape({ name: proptypes.string, calories: proptypes.number })
  ),
};

export default List;
