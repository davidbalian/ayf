import React, { useState } from "react";
import logo from "./gem-logo.png";
import { FiArrowDown } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";

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
					<Link exact to='/ayf/' className='p'>
						Home
					</Link>
					<Link to='/ayf/gallery' className='p'>
						Gallery
					</Link>
					<Link to='/ayf/' className='p'>
						About
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
