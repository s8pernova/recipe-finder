import React from "react";
import ingredientsList from "../../ingredients.json";

const Ingredients = (props) => {
	return (
		<div className={`ingredient-container ${props.border} ${props.borderColor}`}>
			<h2>Ingredient Checklist</h2>
			<form className="ingredient-form">
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
			</form>
			<button className="submit-button">Submit</button>
		</div>
	);
};

export default Ingredients;
