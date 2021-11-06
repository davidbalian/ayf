import React from "react";
import "./Hero.css";
import group from "./ayf-2019.jpeg";

const Hero = () => {
	return (
		<div className='hero'>
			<img src={group} alt='' />
			<h1>AYF Cyprus Annual Summer Camp Gallery</h1>
			<p>
				View the pictures and videos from all the summer camps that have
				taken place in the past decade.
			</p>
			<button>Go to Gallery</button>
		</div>
	);
};

export default Hero;
