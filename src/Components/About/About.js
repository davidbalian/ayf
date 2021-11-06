import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className='about'>
			<h2>About AYF and this Gallery</h2>
			<section>
				<h3>What is AYF?</h3>
				<p>
					The Armenian Youth Federation is the youth organization of
					the Armenian Revolutionary Federation. Founded in 1933, the
					AYF became a global Armenian organization and stands on five
					pillars that guide its activities: Educational, Hai Tahd,
					Social, Athletic and Cultural.
				</p>
			</section>
			<section>
				<h3>What is this website?</h3>
				<p>
					This website simply showcases the images and videos from the
					many annual summer camps that AYF Cyprus has organized in
					the Troodos region of Cyprus.
				</p>
			</section>
			<section>
				<h3>Why has this website been made?</h3>
				<p>
					I (the creator of the site,{" "}
					<a href='https://www.facebook.com/davbaly/' target='_blank'>
						David Balian
					</a>
					) decided to make this website in order to organize the
					media from all the summer camps that I attended, and even
					the ones I didn't. These camps were what I looked forward to
					doing the most during the summer, and definitely the
					highlights of my summers as well.
				</p>
			</section>
		</div>
	);
};

export default About;
