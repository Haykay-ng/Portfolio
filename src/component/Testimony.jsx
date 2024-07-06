import stars from "../images/Stars.png";
import stars1 from "../images/Stars.png";
import stars2 from "../images/Stars.png";
import img from "../images/newAva.png";
import img1 from "../images/Avatar Image (2).png";
import img2 from "../images/Avatar Image.png";
import "../styles/Testimony.css";

const Testimony = () => {
	return (
		<div className="testimony-container">
			<div className="body_wrapper_section">
				<div className="test__inner_wrapper">
					<div className="co-head">
						<h4>Client Feedback</h4>
						<h1>Customers Testimonials</h1>
					</div>

					<div className="cards-container">
						<div className="card-test">
							<img src={stars} alt="Stars" className="stars" />
							<p>
								"Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem incidunt delectus, repudiandae impedit reiciendis
								veniam quis quia praesentium, perspiciatis itaque tenetur dicta
								cupiditate aspernatur illo modi dolorum dolore assumenda
								maiores."
							</p>
							<div className="avatar">
								<img src={img} alt="Avatar" className="avatar-img" />
								<p>
									Satish Patel <br />
									CEO, Huddle
								</p>
							</div>
						</div>

						<div className="card-test">
							<img src={stars1} alt="Stars" className="stars" />
							<p>
								"Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem incidunt delectus, repudiandae impedit reiciendis
								veniam quis quia praesentium, perspiciatis itaque tenetur dicta
								cupiditate aspernatur illo modi dolorum dolore assumenda
								maiores."
							</p>
							<div className="avatar">
								<img src={img1} alt="Avatar" className="avatar-img" />
								<p>
									Samantha Johnson <br />
									CEO & Founder, XYZ Corp
								</p>
							</div>
						</div>

						<div className="card-test">
							<img src={stars2} alt="Stars" className="stars" />
							<p>
								"Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem incidunt delectus, repudiandae impedit reiciendis
								veniam quis quia praesentium, perspiciatis itaque tenetur dicta
								cupiditate aspernatur illo modi dolorum dolore assumenda
								maiores."
							</p>
							<div className="avatar">
								<img src={img2} alt="Avatar" className="avatar-img" />
								<p>
									John Doe <br />
									CTO & Founder, Yamaha
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimony;
