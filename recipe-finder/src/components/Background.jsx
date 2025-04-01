import { useState, useEffect } from "react";

const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
const numOfImages = 50;
const RANDOM_IMAGE_URL = `https://api.spoonacular.com/recipes/random?number=${numOfImages}&apiKey=${SPOONACULAR_API_KEY}`;

const Background = () => {
	const [backgroundImages, setBackgroundImages] = useState([]);

	useEffect(() => {
		const fetchBackgroundImages = async () => {
			try {
				const response = await fetch(RANDOM_IMAGE_URL);
				const data = await response.json();

				if (data.recipes) {
					setBackgroundImages(data.recipes.map((recipe) => recipe.image));
				}
			} catch (error) {
				console.error("Error fetching background images:", error);
			}
		};
		fetchBackgroundImages();
	}, []);

	return (
		<div className="background-grid">
			{backgroundImages.map((image, index) => (
				<img key={index} src={image} alt="food" className="background-img" />
			))}
		</div>
	);
};

export default Background;
