import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Nav.css";
import "../App.css";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef();

	const handleClick = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header>
			<div className="newhead">
				<span>
					<img src={logo} alt="Logo" />
					HaykayDev,
				</span>

				<div className="middle-side">
					<ul>
						<Link to="/home" style={{ textDecoration: "none" }}>
							<div className="mid-btn">
								<h4 className="home">Home</h4>
							</div>
						</Link>
						<Link to="/portfolio" style={{ textDecoration: "none" }}>
							<div className="mid-btn">
								<h4>Portfolio</h4>
							</div>
						</Link>
						<Link to="/about" style={{ textDecoration: "none" }}>
							<div className="mid-btn">
								<h4>About me</h4>
							</div>
						</Link>
						<Link to="/testimonials" style={{ textDecoration: "none" }}>
							<div className="mid-btn">
								<h4>Testimonials</h4>
							</div>
						</Link>
					</ul>
				</div>

				<div className="contact_btn_wrap">
					<a href="#">
						<button className="contact-btn">Contact Me</button>
					</a>
				</div>

				<div className="menu-wrapper" onClick={handleClick}>
					{menuOpen ? (
						<img
							src={close}
							title="Close menu"
							alt="Close menu icon"
							className="close"
						/>
					) : (
						<img
							src={hamburger}
							title="Open menu"
							alt="Hamburger menu icon"
							className="menu"
						/>
					)}
				</div>
			</div>

			{menuOpen && (
				<div className="mobile_update_format" ref={menuRef}>
					<div className="middle-side">
						<ul>
							<Link to="/home" style={{ textDecoration: "none" }}>
								<div className="mid-btn">
									<h4 className="home">Home</h4>
								</div>
							</Link>
							<Link to="/portfolio" style={{ textDecoration: "none" }}>
								<div className="mid-btn">
									<h4>Portfolio</h4>
								</div>
							</Link>
							<Link to="/about" style={{ textDecoration: "none" }}>
								<div className="mid-btn">
									<h4>About me</h4>
								</div>
							</Link>
							<Link to="/testimonials" style={{ textDecoration: "none" }}>
								<div className="mid-btn">
									<h4>Testimonials</h4>
								</div>
							</Link>
						</ul>
					</div>

					<div className="contact_btn_wrap">
						<a href="#">
							<button className="contact-btn">Contact Me</button>
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Nav;
