import React from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path='/ayf'>
						<Hero />
						<About />
					</Route>
					<Route path='/ayf/gallery'>
						<Gallery />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
