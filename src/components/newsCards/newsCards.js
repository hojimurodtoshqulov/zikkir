import scss from "./newsCards.module.scss";
import img4 from "../../media/news.line.png";
import newsImg1 from "../../media/u16.png";
import newsImg2 from "../../media/u10.png";
import newsImg3 from "../../media/u7.png";
import newsImg4 from "../../media/smart2.png";
import newsImg5 from "../../media/u12.png";
import { useTranslation } from "react-i18next";
import Modal from "../modal/modal";
import { useState } from "react";
const NewsCards = () => {
	const { t } = useTranslation();
	const [openModal, setOpenModal] = useState(false);
	const [cardOreder, setcardOreder] = useState(0);
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
	return (
		<>
			<div className={scss.newsCards}>
				<div className="container">
					<div className={scss.newsCardsDiv}>
						{dataCards?.map((item, index) => (
							<div
								className={scss.slide}
								key={index}
								data-aos={item.aos}
								onClick={() => {
									setOpenModal(true);
									setcardOreder(index);
								}}
							>
								<div className={scss.titlesDiv}>
									<p>{item.date}</p>
									<h5>{item.title}</h5>
								</div>
								<img src={item.img} alt={item.img} className={scss.slideImg} />
								<img src={img4} alt={img4} className={scss.slideImgLine} />
								<p className={scss.slideText}>{item.description}</p>
							</div>
						))}
					</div>
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

export default NewsCards;
