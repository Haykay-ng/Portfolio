import React from "react";
import { Link } from "react-router-dom";
import git from "../images/mdi_github.png";
import avatar from "../images/Vector (1).png";
import "../styles/portfolio.css";
import flyo from "../images/flyo.jpg";
import apiadvice from "../images/adviceapi.jpg";
import multistep from "../images/multi-step.jpg";
import avanew from "../images/Vector (1).png";
import newvar from "../images/Vector (1).png";

const Portfolio = () => {
	return (
		<>
			<section className="body_wrapper_section">
				<div>
					<div className="Portfolio">
						<div className="folio">
							<h2>Recent projects</h2>
							<p>My Portfolio</p>
						</div>

						<Link to="/https://github.com/Haykay-ng">
							<button className="git-img">
								<img src={git} alt="" />
								Visit My Github
							</button>
						</Link>
					</div>

					<div className="Main-card">
						<div className="card">
							<img
								style={{ width: "300px", height: "170px" }}
								src={flyo}
								alt=""
							/>
							<h2>Flyo</h2>
							<p>
								Flyo landing page responsive to all kind of screen and viable{" "}
							</p>
							<Link to="/project-link" style={{ textDecoration: "none" }}>
								<button className="btn-n">
									View Website <img src={avatar} alt="" />
								</button>
							</Link>
						</div>

						<div className="card">
							<img src={apiadvice} alt="" />
							<h2> Advice</h2>
							<p>
								{" "}
								Advice generator responsive to mobile and all kind of screean
								generated with the use of Api to fetch every data
							</p>

							<Link to="/project-link" style={{ textDecoration: "none" }}>
								<button className="btn-n">
									View Website <img src={avanew} alt="" />
								</button>
							</Link>
						</div>

						<div className="card">
							<img src={multistep} alt="" />
							<h2>Multi-step form</h2>
							<p>
								A response application build with a good understanding of HTML,
								CSS and JavaScript.
							</p>
							<Link to="/project-link" style={{ textDecoration: "none" }}>
								<button className="btn-n">
									View Website <img src={newvar} alt="" />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
