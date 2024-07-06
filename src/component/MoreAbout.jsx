import profImg from "../images/About Me.png";
import "../styles/MoreAbout.css"; // Make sure to include the CSS file

const MoreAbout = () => {
	return (
		<div className="body_wrapper_section">
			<div className="port">
				<div className="top-text">
					<div className="left-img">
						<img src={profImg} alt="Profile" />
					</div>
					<div className="right-me">
						<h1>About</h1>
						<h4>About me</h4>
						<p>
							I am a software engineer with a passion for developing
							user-centric web applications. With a fierce passion for
							technology and a solid grasp of programming fundamentals, I'm
							primed to make a meaningful impact in the frontend development
							landscape. I'm eager to leverage my skills to tackle complex
							projects and explore the vast capabilities of ReactJS, as well as
							other frameworks. I'm excited to learn from seasoned mentors and
							contribute to building robust, scalable, and maintainable
							applications. With an insatiable thirst for knowledge and a
							willingness to embrace new challenges, I'm ready to propel myself
							to success in the ever-evolving world of software development.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreAbout;
