import React from "react";
import Ingredients from "./components/Ingredients";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const App = () => {
	// const [inputs, setInputs] = useState({
	// 	url: "",
	// 	format: "",
	// 	no_ads: "",
	// 	no_cookie_banners: "",
	// 	width: "",
	// 	height: "",
	// });

	return (
		<div className="main-container">
			<Ingredients />
		</div>
	);
};

export default App;
