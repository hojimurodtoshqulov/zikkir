import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./newsService.module.scss";
import img1 from "../../media/u2.png";
import img2 from "../../media/u3.png";
import img3 from "../../media/u4.png";
import img4 from "../../media/u12.png";
import img5 from "../../media/u7.png";
import { Link } from "react-router-dom";
const NewsService = ({ theme }) => {
	// const [_, order] = theme.split(" ");
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 3600);
	};
	const images = [img1, img2, img3, img4, img5];
	const titles = [
		t("News-houses"),
		t("News-houses"),
		t("News-houses"),
		t("News-houses"),
		t("News-houses"),
	];
	const texts = [
		t(
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab in voluptatibus sunt harum sed iure a consequatur neque doloremque."
		),
		t(
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab in voluptatibus sunt harum sed iure a consequatur neque doloremque."
		),
		t(
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab in voluptatibus sunt harum sed iure a consequatur neque doloremque."
		),
		t(
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab in voluptatibus sunt harum sed iure a consequatur neque doloremque."
		),
		t(
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab in voluptatibus sunt harum sed iure a consequatur neque doloremque."
		),
	];
	return (
		<div className={styles.main}>
			<div className={styles.imgWrap}>
				<img src={img1} alt={img1} />
			</div>
			<div className={styles.content}>
				<h2>{titles[0]}</h2>
				<p> {texts[0]} </p>
				<div className={styles.content_elements}>
					<Link
						onClick={scrollToTop}
						to="cho'lquvar"
						className={styles.content_elements_div}
					>
						<h3>Cho'lquvar</h3>
						<button>send</button>
					</Link>
					<div className={styles.content_elements_div}>
						<h3>bla bla kuu</h3>
						<button>send</button>
					</div>
				</div>
			</div>
			{/* <div className="leasing__cards">
				<InfoCard text={t("leasingPage.cards.card1")} title={"18-48"} />
				<InfoCard text={t("leasingPage.cards.card2")} title={"36%"} />
				<InfoCard text={t("leasingPage.cards.card3")} title={"20%"} />
				<InfoCard text={t("leasingPage.cards.card4")} title={"2%"} />
			</div> */}
		</div>
	);
};

export default NewsService;
