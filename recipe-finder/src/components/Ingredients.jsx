import React, { useState } from "react";
import ingredientsList from "../../ingredients.json";

const Ingredients = ({ fetchRecipes }) => {
	const [selectedIngredients, setSelectedIngredients] = useState([]);
	const [banList, setBanList] = useState([]);

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setSelectedIngredients((prev) =>
			checked
				? [...prev, name]
				: prev.filter((ingredient) => ingredient !== name)
		);
	};

	const handleBanListChange = (event) => {
		// Add handler for ban list
		const { name, checked } = event.target;
		setBanList((prev) =>
			checked
				? [...prev, name]
				: prev.filter((ingredient) => ingredient !== name)
		);
	};

	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevents page reload
		if (selectedIngredients.length === 0) {
			alert("Please select at least one ingredient!");
			return;
		}

		try {
			await fetchRecipes(selectedIngredients, banList);
		} catch (error) {
			console.error("Error fetching recipes:", error);
		}
	};

	return (
		<div>
			<form className="ingredient-container" onSubmit={handleSubmit}>
				<h2>Ingredient Checklist</h2>
				<div className="ingredient-form">
					{ingredientsList.map((ingredient, index) => (
						<div key={index}>
							<input
								type="checkbox"
								id={`ingredient-${index}`}
								name={ingredient}
								onChange={handleCheckboxChange}
							/>
							<label htmlFor={`ingredient-${index}`}>{ingredient}</label>
						</div>
					))}
				</div>

				<h2>Ban List :(</h2>
				<div className="ingredient-form">
					{ingredientsList.map((ingredient, index) => (
						<div key={index}>
							<input
								type="checkbox"
								id={`ban-${index}`}
								name={ingredient}
								onChange={handleBanListChange}
							/>
							<label htmlFor={`ban-${index}`}>{ingredient}</label>
						</div>
					))}
				</div>

				<button type="submit" className="submit-button" onClick={handleSubmit}>
					Look up recipes!
				</button>
			</form>
		</div>
	);
};

export default Ingredients;
