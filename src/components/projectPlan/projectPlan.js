import "./projectPlan.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../media/1.png.png";
import img2 from "../../media/2.png.png";
import img3 from "../../media/3.png.png";
import img4 from "../../media/2.png.png";
import { useTranslation } from "react-i18next";

const ProjectPlan = ({ datas }) => {
	const { t } = useTranslation();
	// const data = [
	// 	{
	// 		img: img1,
	// 		text: "Общая площадь: 44.67 м²",
	// 		title: "Количество комнат: 1",
	// 	},
	// 	{
	// 		img: img2,
	// 		text: "Общая площадь: 44.30 м²",
	// 		title: "Количество комнат: 1",
	// 	},
	// 	{
	// 		img: img3,
	// 		text: "Общая площадь: 49.12 м²",
	// 		title: "Количество комнат: 1",
	// 	},
	// 	{
	// 		img: img4,
	// 		text: "Общая площадь: 50.15 м²",
	// 		title: "Количество комнат: 1",
	// 	},
	// ];
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
		<div className="projectPlan">
			<div className="container" data-aos="fade-up">
				<h2 data-aos="flip-up">{t("projects.projectsPlan")}</h2>
				<div className="resourses" data-aos="flip-up">
					<Slider {...settings}>
						{datas?.map((item, index) => (
							<div
								key={index}
								className={index === imageIndex ? "slide active" : "slide"}
							>
								<a>
									<img src={item.img} alt={item.img} />
									<div className="text">
										<p>
											{item.text.slice(0, 19)}
											<span>{item.text.slice(18)}</span>
										</p>
										<p>
											{/* {item.title} */}
											{item.title.slice(0, 15)}
											<span>{item.title.slice(15)}</span>
										</p>
									</div>
								</a>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ProjectPlan;
