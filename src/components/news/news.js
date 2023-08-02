import React from "react";
import scss from "./news.module.scss";
import img1 from "../../media/u12.png";
import img2 from "../../media/u10.png";
import img3 from "../../media/u9.png";
import img4 from "../../media/news.line.png";
import img5 from "../../media/logo_grey.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "../button/button";
const News = ({}) => {
	const { t } = useTranslation();
	const dataCards = [
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
			arrowR: <HiArrowLongRight />,
		},
	];
	return (
		<div className={scss.news}>
			<div className={scss.sectionSlides} data-aos="fade-up">
				<h2 data-aos="flip-up">Новости</h2>
				<div className={scss.slider} data-aos="fade-up">
					<div className={scss.slide_track}>
						{dataCards?.map((item, index) => (
							<Link to="/news" className={scss.slide} key={index}>
								<div className={scss.titlesDiv}>
									<p>2023-06-24</p>
									<h5>{item.title}</h5>
								</div>
								<img src={item.img} alt={item.img} className={scss.slideImg} />
								<img src={img4} alt={img4} className={scss.slideImgLine} />
								<p className={scss.slideText}>{item.description}</p>
							</Link>
						))}
					</div>
					<div className={scss.shadow}></div>
					<div className={scss.shadow2}></div>
				</div>
				<img src={img5} alt={img5} className={scss.whiteLogo} />
				<img src={img5} alt={img5} className={scss.whiteLogo2} />
			</div>
		</div>
	);
};

export default News;
