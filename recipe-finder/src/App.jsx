import Ingredients from "./components/Ingredients.jsx";
import Background from "./components/Background.jsx";
import useFetchRecipe from "./hooks/useFetchRecipe.jsx";

const App = () => {
	const { recipes, fetchRecipes } = useFetchRecipe();

	return (
		<div className="main-container">
			<Background />
			<Ingredients fetchRecipes={fetchRecipes} />
			<ul className="recipe-list">
				{recipes.map((recipe) => (
					<li key={recipe.id}>
						<h3>{recipe.title}</h3>
						<img src={recipe.image} alt={recipe.title} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
