import Button from "../button/button";
import scss from "./advantages.module.scss";
import { useTranslation } from "react-i18next";

const Advantages = ({}) => {
	const { t } = useTranslation();

	return (
		<div className={scss.advantages}>
			<div className="container">
				<h2 data-aos="fade-up-right">{t("home.advantages.title")}</h2>
				<div className={scss.advantages__elements}>
					<div
						className={scss.advantages__elements_texts}
						data-aos="fade-right"
					>
						<div className={scss.line}></div>
						<h3>
							<span>1</span>
							{t("home.advantages.step1.title")}
						</h3>
						<p>{t("home.advantages.step1.text")}</p>
					</div>
					<div className={scss.advantages__elements_texts} data-aos="fade-left">
						<div className={scss.line}></div>
						<h3>
							<span>2</span>
							{t("home.advantages.step2.title")}
						</h3>
						<p>
							{t("home.advantages.step2.text")}
						</p>
						<div className={scss.videoTexts}>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/SaseeK2sFTY"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
							
						</div>
					</div>
					<div
						className={scss.advantages__elements_texts}
						data-aos="fade-right"
					>
						<h3>
							<span>3</span>
							{t("home.advantages.step3.title")}
						</h3>
						<p>
							{t("home.advantages.step3.text")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
