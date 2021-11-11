import React from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Gallery />
			<Footer />
		</div>
	);
};

export default App;
