import React, { useState } from "react";
import Ingredients from "./components/Ingredients.jsx";

const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes/findByIngredients";

const App = () => {
	const [recipes, setRecipes] = useState([]);

	const fetchRecipes = async (ingredients, banList) => {
		const ingredientQuery = ingredients.join(",");
		const banListQuery = banList.join(",");
		const query = `${BASE_URL}?ingredients=${ingredientQuery}&ignorePantry=${banListQuery}&number=10&apiKey=${SPOONACULAR_API_KEY}`;

		try {
			const response = await fetch(query);
			const data = await response.json();

			if (!data || data.length === 0) {
				alert("No recipes found. Try different ingredients!");
				return;
			}

			setRecipes(data); // Updates state with recipes
		} catch (error) {
			console.error("Error fetching recipes:", error);
		}
	};

	return (
		<div className="main-container">
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
