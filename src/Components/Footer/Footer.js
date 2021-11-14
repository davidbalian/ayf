import React from "react";
import "./Footer.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<div className='footer'>
			<p>
				Created by{" "}
				<a
					href='https://www.facebook.com/davbaly/'
					target='_blank'
					rel='noreferrer'
					className='david'
				>
					David Balian
				</a>
			</p>
			<div className='social-media'>
				<div className='mme-icons'>
					<a
						href='https://www.facebook.com/GEM-Badanegan-307178382811648'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillFacebook />
					</a>
					<a
						href='https://www.instagram.com/gem_badanegan/'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillInstagram />
					</a>
				</div>
				<p>AYF Cy Social Media</p>
			</div>
		</div>
	);
};

export default Footer;
