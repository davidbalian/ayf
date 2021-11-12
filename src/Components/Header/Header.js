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
					<a>Menu</a>
					<FiArrowDown className='menu-arrow' />
				</div>
				<nav id={show ? "" : "hide"}>
					<Link exact to='/ayf/'>
						<a className='a'>Home</a>
					</Link>
					<Link to='/ayf/gallery'>
						<a className='a'>Gallery</a>
					</Link>
					<Link to='/ayf/'>
						<a className='a'>About</a>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
