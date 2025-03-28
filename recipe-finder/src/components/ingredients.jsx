import { useState } from "react";
import ingredientsList from "../../ingredients.json";

const Ingredients = (props) => {
	const [selectedIngredients, setSelectedIngredients] = useState([]);

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setSelectedIngredients((prev) =>
			checked
				? [...prev, name]
				: prev.filter((ingredient) => ingredient !== name)
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Selected Ingredients:", selectedIngredients);
		// Prepare the selectedIngredients for the API call here
		// For example, you could call a function like sendIngredientsToApi(selectedIngredients)
	};

	return (
		<div
			className={`ingredient-container ${props.border} ${props.borderColor}`}
		>
			<h2>Ingredient Checklist??</h2>
			<form className="ingredient-form" onSubmit={handleSubmit}>
				{ingredientsList.map((ingredient, index) => (
					<div key={index}>
						<input
							type="checkbox"
							id={`ingredient-${index}`}
							name={ingredient}
						/>
						<label htmlFor={`ingredient-${index}`}>{ingredient}</label>
					</div>
				))}

				<button type="submit" className="submit-button">
					Submit!
				</button>
			</form>
		</div>
	);
};

export default Ingredients;
