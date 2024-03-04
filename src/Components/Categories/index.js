import "./index.sass";

const Categories = () => {
  // const ob = {
  //   name: "Testowe",
  //   url: "https://cdn.discordapp.com/attachments/1166627459752525857/1214325238918291486/Rectangle_35.png?ex=65f8b382&is=65e63e82&hm=0c422e8b066ae98978d7275b235a6e2afff7d309fc95da4f6230b51f01adaa25&",
  //   tasks: [
  //     ["Zadanie", 0],
  //     ["Zadanie", 1],
  //   ],
  // };
  // const ob2 = {
  //   name: "Testowe 2",
  //   url: "https://cdn.discordapp.com/attachments/1166627459752525857/1214325238918291486/Rectangle_35.png?ex=65f8b382&is=65e63e82&hm=0c422e8b066ae98978d7275b235a6e2afff7d309fc95da4f6230b51f01adaa25&",
  //   tasks: [
  //     ["Zadanie", 0],
  //     ["Zadanie", 1],
  //   ],
  // };
  // const categories = [ob, ob2];

  // localStorage.setItem("categories", JSON.stringify(categories));

  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));
  return (
    <div className="categories">
      {localStorageCategories.map((category) => (
        <div className="categories__block">
          <img
            className="categories__block--img"
            src={category.url}
            alt="Category cover"
          />
          <h2>{category.name}</h2>
          <p>{category.tasks.length} zadania</p>
        </div>
      ))}
      {/* Skeleton
      <div className="categories__block">
        <img className="categories__block--img" src="" alt="Category cover" />
        <h2>Testowe</h2>
        <p>2 zadania</p>
      </div> */}
    </div>
  );
};

export default Categories;
