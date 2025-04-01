import { useState } from "react";

const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes/findByIngredients";

const useFetchRecipe = () => {
	const [recipes, setRecipes] = useState([]);

	const fetchRecipes = async (ingredients, banList) => {
		if (!ingredients.length) {
			alert("Please select at least one ingredient!");
			return;
		}

		const ingredientQuery = ingredients.join(",");
		const banListQuery = banList.join(",");
		const numberOfRecipes = 20;
		const query = `${BASE_URL}?ingredients=${ingredientQuery}&excludeIngredients=${banListQuery}&number=${numberOfRecipes}&apiKey=${SPOONACULAR_API_KEY}`;

		try {
			const response = await fetch(query);
			const data = await response.json();

			if (!data || data.length === 0) {
				alert("No recipes found. Try different ingredients!");
				return;
			}

			const filteredRecipes = data.filter(
				(recipe) =>
					!banList.some((banned) =>
						recipe.title.toLowerCase().includes(banned.toLowerCase())
					)
			);

			if (filteredRecipes.length === 0) {
				alert(
					"All results contain banned ingredients. Try adjusting your ban list."
				);
				return;
			}

			setRecipes(filteredRecipes); // Updates state with recipes
		} catch (error) {
			console.error("Error fetching recipes:", error);
		}
	};

	return { recipes, fetchRecipes };
};

export default useFetchRecipe;
