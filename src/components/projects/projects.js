import React from "react";
import "./projects.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../media/u2.png";
import img2 from "../../media/u7.png";
import img3 from "../../media/smart2.png";
import img4 from "../../media/eskiShahar4.png";
import img5 from "../../media/logo_white.png";
import logo1 from "../../media/cholquvar.png";
import logo2 from "../../media/paxtazor.png";
import logo3 from "../../media/smartLogo.png";
import logo4 from "../../media/eskiShaharLogo.png";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t } = useTranslation();
	const data = [
		{
			img: img1,
			logo: logo1,
			link: "/cho'lquvar",
			title: "Cho'lquvar",
		},
		{
			img: img2,
			logo: logo2,
			link: "/paxtazor",
			title: "Paxtazor",
		},
		{
			img: img3,
			logo: logo3,
			link: "/smart",
			title: "Bla bla",
		},
		{
			img: img4,
			logo: logo4,
			link: "/eskiShahar",
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
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="projects">
			<div className="container">
				<h2 data-aos="fade-up"> {t("home.projects")}</h2>
				<div className="resourses">
					<Slider {...settings}>
						{data.map((item, index) => (
							<div
								key={index}
								className={index === imageIndex ? "slide active" : "slide"}
								data-aos="fade-up"
								onClick={scrollToTop}
							>
								<Link onClick={scrollToTop} to={item.link} data-aos="fade-up">
									<img
										className="img"
										src={item.img}
										alt={item.img}
										onClick={scrollToTop}
									/>
									<img className="link" src={item.logo} alt={item.logo} />
								</Link>
							</div>
						))}
					</Slider>
				</div>
			</div>
			<img className="logo1" src={img5} alt={img5} data-aos="fade-up" />
			<div className="logo2">
				<img data-aos="fade-up" src={img5} alt={img5} />
			</div>
		</div>
	);
};

export default Projects;
