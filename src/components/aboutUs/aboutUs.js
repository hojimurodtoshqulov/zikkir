import scss from "./aboutUs.module.scss";
import img1 from "../../media/u6.1.png";
import img2 from "../../media/logo_white.png";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Counter from "../counter/counter";
import MainSymbol from "../mainSymbol/mainSymbol";

const AboutUs = () => {
	const transition = { type: "spring", duration: 2 };
	const { t } = useTranslation();
	return (
		<div className={scss.aboutUsDiv}>
			<div className="container">
				<div className={scss.aboutUs}>
					<div className={scss.aboutUs__col1}>
						<div className={scss.aboutUs__col1_titles} data-aos="fade-right">
							<h2>
								<MainSymbol symbolWith={30} brr={9} /> {t("nav.company")}
							</h2>
						</div>
						<div className={scss.aboutUs__col1_texts} data-aos="fade-right">
							<p>{t("home.aboutUs.text")}</p>
						</div>
						<div className={scss.counts} data-aos="fade-right">
							<h4>
								15
								<span className={scss.counts_span}>
									<MainSymbol symbolWith={15} brr={5} />{" "}
									{t("home.aboutUs.numberTexts.text1")}
								</span>
							</h4>
							<h4>
								25
								<span className={scss.counts_span}>
									<MainSymbol symbolWith={15} brr={5} />
									{t("home.aboutUs.numberTexts.text2")}
								</span>
							</h4>
						</div>
						<div className={scss.counts} data-aos="fade-right">
							<h4>
								200 +
								<span className={scss.counts_span}>
									<MainSymbol symbolWith={15} brr={5} />{" "}
									{t("home.aboutUs.numberTexts.text3")}
								</span>
							</h4>
							<h4>
								30,000
								<i>
									m<sup>2</sup>{" "}
								</i>
								+
								<span className={scss.counts_span}>
									<MainSymbol symbolWith={15} brr={5} />{" "}
									{t("home.aboutUs.numberTexts.text4")}
								</span>
							</h4>
						</div>
					</div>
					<div className={scss.aboutUs__col2}>
						<img
							className={scss.aboutUs__col2_img1}
							src={img1}
							alt={img1}
							data-aos="fade-up"
							data-aos-delay="500"
						/>
						<img
							className={scss.aboutUs__col2_img2}
							src={img2}
							alt={img2}
							data-aos="fade-up"
							style={{ opacity: "0.7" }}
						/>
						<div className={scss.aboutUs__col2_img3}>
							<img src={img2} alt={img2} data-aos="fade-up" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
