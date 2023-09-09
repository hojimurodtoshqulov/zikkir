import scss from "./contactHeader.module.scss";
import img1 from "../../media/logo_white.png";
import { useTranslation } from "react-i18next";

const ContactHeader = ({ bgImage, title }) => {
	const { t } = useTranslation();

	return (
		<div
			className={scss.contactHeader}
			style={{ backgroundImage: `url("${bgImage}")` }}
		>
			<div className="container">
				<div className={scss.elements} data-aos="fade-up">
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol1} data-aos="fade-up-left">
							<p>
								{t("contact.card1.title")} <br />
								{t("contact.card1.title2")} <br /> {t("contact.card1.text1")}{" "}
								<span>{t("contact.card1.text3")}</span>
								<br />
								{t("contact.card1.text2")}{" "}
								<span>{t("contact.card1.text3")}</span>
							</p>
						</div>
						<div className={scss.elementsDivCol1} data-aos="fade-up-right">
							<p> {t("contact.card2.title")}</p> <br />
							<a href="tel:+998336450555">33 645 05 55</a>
						</div>
					</div>
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol} data-aos="flip-up">
							<p>
								{t("contact.card3.title")} <br />
								<span>
									{t("contact.card3.text")} <br />
									{t("contact.card3.text2")}
								</span>
							</p>
						</div>
					</div>
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol} data-aos="flip-up">
							<p>
								{t("contact.card4.title")}{" "}
								<span>
									<a href="">{t("contact.card4.text")}</a>{" "}
								</span>{" "}
								<br />
								{t("contact.card4.title2")}{" "}
								<span>
									<a href=""> {t("contact.card4.text2")}</a>{" "}
								</span>
								{t("contact.card4.title3")}{" "}
								<span>
									<a href="">{t("contact.card4.text3")}</a>{" "}
								</span>
								{t("contact.card4.title4")}{" "}
								<span>
									<a href="">{t("contact.card4.text4")}</a>{" "}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<img
				src={img1}
				alt={img1}
				className={scss.contactHeaderImg}
				data-aos="fade-up"
				data-aos-delay="900"
			/>
			<div className={scss.contactHeaderImg2}>
				<img src={img1} alt={img1} data-aos="fade-up" data-aos-delay="900" />
			</div>
		</div>
	);
};

export default ContactHeader;
