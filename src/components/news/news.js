import React from "react";
import scss from "./news.module.scss";
import newsImg1 from "../../media/u16.png";
import newsImg2 from "../../media/u10.png";
import newsImg3 from "../../media/u7.png";
import newsImg4 from "../../media/smart2.png";
import newsImg5 from "../../media/u12.png";
import img4 from "../../media/news.line.png";
import img5 from "../../media/logo_grey.png";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
const News = ({ data }) => {
	const { t } = useTranslation();
	const [openModal, setOpenModal] = useState(false);
	const [cardOreder, setcardOreder] = useState(0);
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const dataCards = [
		{
			img: newsImg1,
			date: "2023-06-24",
			title: t("news.card1.title"),
			description: t("news.card1.text"),
		},
		{
			img: newsImg2,
			date: "2023-05-15",
			title: t("news.card2.title"),
			description: t("news.card2.text"),
		},
		{
			img: newsImg3,
			date: "2023-04-12",
			title: t("news.card3.title"),
			description: t("news.card3.text"),
		},
		{
			img: newsImg4,
			date: "2023-03-22",
			title: t("news.card4.title"),
			description: t("news.card4.text"),
		},
		{
			img: newsImg5,
			date: "2023-02-09",
			title: t("news.card5.title"),
			description: t("news.card5.text"),
		},
	];
	const windowSize = useRef([window.innerWidth, window.innerHeight]);
	const [num, setNum] = useState(4);
	const listenScrollEvent = () => {
		if (windowSize.current[0] < 375) {
			setNum(1);
		} else if (windowSize.current[0] < 576) {
			setNum(2);
		} else if (windowSize.current[0] < 992) {
			setNum(3);
		} else if (windowSize.current[0] < 1201) {
			setNum(4);
		} else if (windowSize.current[0] < 1920) {
			setNum(4);
		} else {
			setNum(5);
		}
	};

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: num,
		slidesToScroll: 1,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	return (
		<>
			<div className={scss.news}>
				<div className={scss.sectionSlides} data-aos="fade-up">
					<h2 data-aos="flip-up">{t("nav.news")}</h2>

					<div className={scss.slider} data-aos="fade-up">
						<div className={scss.slide_track}>
							<Slider {...settings}>
								{dataCards?.map((item, index) => (
									<div
										to="/news"
										className={scss.slide}
										key={index}
										onClick={() => {
											setOpenModal(true);
											setcardOreder(index);
										}}
									>
										{console.log("<<index modal>>", cardOreder)}
										<div className={scss.titlesDiv}>
											<p>{item.date}</p>
											<h5>{item.title}</h5>
										</div>
										<img
											src={item.img}
											alt={item.img}
											className={scss.slideImg}
										/>
										<img src={img4} alt={img4} className={scss.slideImgLine} />
										<p className={scss.slideText}>{item.description}</p>
									</div>
								))}
							</Slider>
							{/* {dataCards?.map((item, index) => (
								<div
									to="/news"
									className={scss.slide}
									key={index}
									onClick={() => {
										setOpenModal(true);
										setcardOreder(index);
									}}
								>
									{console.log("<<index modal>>", cardOreder)}
									<div className={scss.titlesDiv}>
										<p>{item.date}</p>
										<h5>{item.title}</h5>
									</div>
									<img
										src={item.img}
										alt={item.img}
										className={scss.slideImg}
									/>
									<img src={img4} alt={img4} className={scss.slideImgLine} />
									<p className={scss.slideText}>{item.description}</p>
								</div>
							))} */}
							{/* {dataCards?.map((item, index) => (
								<div
									to="/news"
									className={scss.slide}
									key={index}
									onClick={() => {
										setOpenModal(true);
										setcardOreder(index);
									}}
									// onClick={scrollToTop}
								>
									{console.log("<<open modal>>", openModal)}
									<div className={scss.titlesDiv}>
										<p>{item.date}</p>
										<h5>{item.title}</h5>
									</div>
									<img
										src={item.img}
										alt={item.img}
										className={scss.slideImg}
									/>
									<img src={img4} alt={img4} className={scss.slideImgLine} />
									<p className={scss.slideText}>{item.description}</p>
								</div>
							))}
							{dataCards?.map((item, index) => (
								<div
									to="/news"
									className={scss.slide}
									key={index}
									onClick={() => {
										setOpenModal(true);
										setcardOreder(index);
									}}
									// onClick={scrollToTop}
								>
									{console.log("<<open modal>>", openModal)}
									<div className={scss.titlesDiv}>
										<p>{item.date}</p>
										<h5>{item.title}</h5>
									</div>
									<img
										src={item.img}
										alt={item.img}
										className={scss.slideImg}
									/>
									<img src={img4} alt={img4} className={scss.slideImgLine} />
									<p className={scss.slideText}>{item.description}</p>
								</div>
							))}
							{dataCards?.map((item, index) => (
								<div
									to="/news"
									className={scss.slide}
									key={index}
									onClick={() => {
										setOpenModal(true);
										setcardOreder(index);
									}}
									// onClick={scrollToTop}
								>
									{console.log("<<open modal>>", openModal)}
									<div className={scss.titlesDiv}>
										<p>{item.date}</p>
										<h5>{item.title}</h5>
									</div>
									<img
										src={item.img}
										alt={item.img}
										className={scss.slideImg}
									/>
									<img src={img4} alt={img4} className={scss.slideImgLine} />
									<p className={scss.slideText}>{item.description}</p>
								</div>
							))} */}
						</div>
						<div className={scss.shadow}></div>
						<div className={scss.shadow2}></div>
					</div>
					<img src={img5} alt={img5} className={scss.whiteLogo} />
					<img src={img5} alt={img5} className={scss.whiteLogo2} />
				</div>
			</div>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)}
				// theme={`leasingDatas ${setcardOreder}`}
				data={cardOreder}
			/>
		</>
	);
};

export default News;
