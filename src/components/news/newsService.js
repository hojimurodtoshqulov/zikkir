import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./newsService.module.scss";
import img1 from "../../media/u2.png";
import newsImg1 from "../../media/u16.png";
import newsImg2 from "../../media/u10.png";
import newsImg3 from "../../media/u7.png";
import newsImg4 from "../../media/smart2.png";
import newsImg5 from "../../media/u12.png";
import { Link } from "react-router-dom";
const NewsService = ({ data }) => {
	// const [_, order] = theme.split(" ");
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 3600);
	};
	const dataCards = [
		{
			img: newsImg1,
			date: "2023-06-24",
			title: t("news.card1.title"),
			description: t("news.card1.text"),
			project: "Paxtazor",
			link: "/paxtazor",
		},
		{
			img: newsImg2,
			date: "2023-05-15",
			title: t("news.card2.title"),
			description: t("news.card2.text"),
			project: "Paxtazor",
			link: "/paxtazor",
		},
		{
			img: newsImg3,
			date: "2023-04-12",
			title: t("news.card3.title"),
			description: t("news.card3.text"),
			project: "Paxtazor",
			link: "/paxtazor",
		},
		{
			img: newsImg4,
			date: "2023-03-22",
			title: t("news.card4.title"),
			description: t("news.card4.text"),
			project: "Smart cho'lquvar",
			link: "/smart",
		},
		{
			img: newsImg5,
			date: "2023-02-09",
			title: t("news.card5.title"),
			description: t("news.card5.text"),
			project: "Cho'lquvar",
			link: "/cho'lquvar",
		},
	];
	return (
		<>
			{dataCards?.map((item, index) =>
				index === data ? (
					<div className={styles.main}>
						<div className={styles.imgWrap}>
							<img src={img1} alt={img1} />
						</div>
						<div className={styles.content}>
							<h2>{item?.title}</h2>
							<p> {item?.description} </p>
							<div className={styles.content_elements}>
								<Link
									onClick={scrollToTop}
									to={item?.link}
									className={styles.content_elements_div}
								>
									<h3>{item?.project}</h3>
									<button>{t("home.hero.btnText1")}</button>
								</Link>
								<Link
									onClick={scrollToTop}
									to={item?.link}
									className={styles.content_elements_div}
								>
									<h3>{item?.project}</h3>
									<button>{t("home.hero.btnText1")}</button>
								</Link>
							</div>
						</div>
					</div>
				) : null
			)}
		</>
	);
};

export default NewsService;
