import React from "react";
import "./Hero.css";
import group from "./ayf-2019.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className='hero'>
			<img src={group} alt='' />
			<h1>AYF Cyprus Annual Summer Camp Gallery</h1>
			<p>
				View the pictures and videos from all the summer camps that have
				taken place in the past decade.
			</p>
			<Link to='/ayf/gallery'>
				<button>Go to Gallery</button>
			</Link>
		</div>
	);
};

export default Hero;
