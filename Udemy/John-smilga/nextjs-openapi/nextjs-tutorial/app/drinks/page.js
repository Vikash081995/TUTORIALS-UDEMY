const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
import DrinksList from "../components/DrinksList";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
}

const DrinksPage = async () => {
  const data = await fetchDrinks();
  return (
    <div>
      <h1 className="text-7xl">
        <DrinksList drinks={data.drinks} />
      </h1>
      ;
    </div>
  );
};
export default DrinksPage;