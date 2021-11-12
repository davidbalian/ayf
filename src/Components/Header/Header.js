import React, { useState } from "react";
import logo from "./gem-logo.png";
import { FiArrowDown } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='header'>
			<Link exact to='/ayf/'>
				<img src={logo} alt='GEM Logo' />
			</Link>
			<div className='nav-container' onClick={() => setShow(!show)}>
				<div className='menu-text'>
					{/* eslint-disable-next-line*/}
					<a href='#'>Menu</a>
					<FiArrowDown className='menu-arrow' />
				</div>
				<nav id={show ? "" : "hide"}>
					<Link exact to='/ayf/'>
						{/* eslint-disable-next-line*/}
						<a className='a' href='#'>
							Home
						</a>
					</Link>
					<Link to='/ayf/gallery'>
						{/* eslint-disable-next-line*/}
						<a className='a' href='#'>
							Gallery
						</a>
					</Link>
					<Link to='/ayf/'>
						{/* eslint-disable-next-line*/}
						<a className='a' href='#'>
							About
						</a>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
