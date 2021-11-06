import React, { useState } from "react";
import logo from "./gem-logo.png";
import { FiArrowDown } from "react-icons/fi";
import "./Header.css";

const Header = () => {
	const [clicked, setClicked] = useState(false);

	return (
		<div className='header'>
			<img src={logo} alt='GEM Logo' />
			<div className='nav-container'>
				<div className='menu-text'>
					<p onClick={() => setClicked(!clicked)}>Menu</p>
					<FiArrowDown
						className='menu-arrow'
						onClick={() => setClicked(!clicked)}
					/>
				</div>
				<nav style={{ display: clicked ? "block" : "none" }}>
					<p onClick={() => setClicked(!clicked)}>Home</p>
					<p onClick={() => setClicked(!clicked)}>Gallery</p>
					<p onClick={() => setClicked(!clicked)}>About</p>
				</nav>
			</div>
		</div>
	);
};

export default Header;
