import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
	let imgLinks = [100];
	let start = 1;
	const [year, setYear] = useState("2019-1");

	if (year === "2019-1") {
		start = 1;
	} else {
		start = 51;
	}

	for (let i = start; i < start + 50; i++) {
		imgLinks[
			i
		] = `https://cdn.jsdelivr.net/gh/davidbalian/ayf-media/2019_${i}.jpg`;
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
				<option value='2019-1'>2019-1</option>
				<option value='2019-2'>2019-2</option>
			</select>
			<div className='images'>
				{imgLinks.slice(1).map((link) => (
					<img src={link} alt='camp 2019 img' />
				))}
			</div>
		</div>
	);
};

export default Gallery;
