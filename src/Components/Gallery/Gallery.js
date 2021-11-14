import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
	let links_2019 = [795];
	const [year, setYear] = useState("2019");
	const [start, setStart] = useState(1);
	const [end, setEnd] = useState(25);

	for (let i = start; i <= end; i++) {
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
			{window.addEventListener("scroll", () => {
				if (
					window.innerHeight + window.pageYOffset >=
					document.body.offsetHeight - 2
				) {
					setStart((prevStart) => 25 + prevStart);
					setEnd((prevEnd) => 25 + prevEnd);
				}
			})}
			<div className='images' id='images'>
				{links_2019.slice(1).map((link) => (
					<img
						key={link}
						loading='lazy'
						src={link}
						alt='camp 2019 img'
					/>
				))}
			</div>
		</div>
	);
};

export default Gallery;
