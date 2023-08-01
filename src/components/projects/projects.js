import React from "react";
import "./projects.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../media/u2.png";
import img2 from "../../media/u7.png";
import img3 from "../../media/u8.png";
import img4 from "../../media/u5.png";
import img5 from "../../media/logo_white.png";
const Projects = () => {
	const data = [
		{
			img: img1,
			link: "/cho'lquvar",
			title: "Cho'lquvar",
		},
		{
			img: img2,
			link: "/paxtazor",
			title: "Paxtazor",
		},
		{
			img: img3,
			link: "/cho'lquvar",
			title: "Bla bla",
		},
		{
			img: img4,
			link: "/paxtazor",
			title: "Big house",
		},
	];
	const NextArrow = ({ onClick }) => (
		<div className="arrow next" onClick={onClick}>
			<FaArrowRight />
		</div>
	);
	const PrevArrow = ({ onClick }) => (
		<div className="arrow prev" onClick={onClick}>
			<FaArrowLeft />
		</div>
	);
	const [imageIndex, setImageIndex] = useState(0);
	const settings = {
		infinite: true,
		lazyload: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};
	return (
		<div className="projects">
			<div className="container">
				<h2>Наши проекты</h2>
				<div className="resourses">
					<Slider {...settings}>
						{data.map((item, index) => (
							<div
								key={index}
								className={index === imageIndex ? "slide active" : "slide"}
							>
								<Link to={item.link} target="_blank">
									<img src={item.img} alt={item.img} />
									<p className="link">{item.title}</p>
								</Link>
							</div>
						))}
					</Slider>
				</div>
			</div>
			<img className="logo1" src={img5} alt={img5} />
			<img className="logo2" src={img5} alt={img5} />
		</div>
	);
};

export default Projects;
