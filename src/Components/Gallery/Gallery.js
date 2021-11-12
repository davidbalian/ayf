import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
	let links_2019 = [795];
	let start = 1;
	const [year, setYear] = useState("2019");

	/*if (year === "2019") {
		start = 1;
	} else {
		start = 51;
	}*/

	for (let i = start; i <= 795; i++) {
		links_2019[
			i
		] = `https://cdn.jsdelivr.net/gh/davidbalian/ayf-camp-2019-media/ayf-camp-2019-${i}.jpg`;
	}

	return (
		<div className='gallery'>
			<label htmlFor='list'>Select Camp Year: </label>
			<select
				name='list'
				id='list'
				value={year}
				onChange={(e) => {
					setYear(e.target.value);
				}}
			>
				<option value='2019'>2019</option>
			</select>
			<div className='images'>
				{links_2019.slice(1).map((link) => (
					<img loading='lazy' src={link} alt='camp 2019 img' />
				))}
			</div>
		</div>
	);
};

export default Gallery;
