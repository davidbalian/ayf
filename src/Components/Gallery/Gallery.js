import React from "react";
import "./Gallery.css";

const Gallery = () => {
	let imgLinks = [100];

	for (let i = 1; i <= 100; i++) {
		imgLinks[
			i
		] = `https://cdn.jsdelivr.net/gh/davidbalian/ayf-media/2019_${i}.jpg`;
	}

	return (
		<div className='gallery'>
			{imgLinks.slice(1).map((link) => (
				<img src={link} alt='camp 2019 img' />
			))}
		</div>
	);
};

export default Gallery;
