import React from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Footer />
		</div>
	);
};

export default App;
