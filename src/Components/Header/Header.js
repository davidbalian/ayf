import React, { useState } from "react";
import logo from "./gem-logo.png";
import { FiArrowDown } from "react-icons/fi";
import "./Header.css";

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='header'>
			<img src={logo} alt='GEM Logo' />
			<div className='nav-container' onClick={() => setShow(!show)}>
				<div className='menu-text'>
					<p>Menu</p>
					<FiArrowDown className='menu-arrow' />
				</div>
				<nav id={show ? "" : "hide"}>
					<p>Home</p>
					<p>Gallery</p>
					<p>About</p>
				</nav>
			</div>
		</div>
	);
};

export default Header;
