import scss from "./company.module.scss";
import img1 from "../../media/u6.1.png";
import img2 from "../../media/logo_white.png";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MainSymbol from "../../components/mainSymbol/mainSymbol";
import AboutUs from "../../components/aboutUs/aboutUs";

const Company = () => {
  const transition = { type: "spring", duration: 2 };
  const { t } = useTranslation();
  return (
    // <div className={scss.aboutUsDiv}>
    // 	<div className="container">
    // 		<div className={scss.aboutUs}>
    // 			<div className={scss.aboutUs__col1}>
    // 				<div className={scss.aboutUs__col1_titles} data-aos="fade-right">
    // 					<h2>
    // 						<MainSymbol symbolWith={30} brr={9} /> {t("nav.company")}
    // 					</h2>
    // 				</div>
    // 				<div className={scss.aboutUs__col1_texts} data-aos="fade-right">
    // 					<p>
    // 						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    // 						Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus
    // 						varius. Sed euismod orci dictum faucibus malesuada. Praesent sed
    // 						eros tincidunt,viverra neque auctor, lobortis enim. Lorem ipsum
    // 						dolor sit amet, consectetur adipiscing elit. Phasellus dapibus
    // 						mauris in lectus tempus, eget tincidunt lacus varius.
    // 					</p>
    // 				</div>
    // 				<div className={scss.counts} data-aos="fade-right">
    // 					<h4>
    // 						4
    // 						<span>
    // 							<MainSymbol symbolWith={15} brr={5} /> лет на рынке
    // 						</span>
    // 					</h4>
    // 					<h4>
    // 						5
    // 						<span>
    // 							<MainSymbol symbolWith={15} brr={5} /> успешных проектов
    // 						</span>
    // 					</h4>
    // 				</div>
    // 				<div className={scss.counts} data-aos="fade-right">
    // 					<h4>
    // 						2000 +
    // 						<span>
    // 							<MainSymbol symbolWith={15} brr={5} /> лет на рынке
    // 						</span>
    // 					</h4>
    // 					<h4>
    // 						50000 +
    // 						<span>
    // 							<MainSymbol symbolWith={15} brr={5} /> успешных проектов
    // 						</span>
    // 					</h4>
    // 				</div>
    // 			</div>
    // 			<div className={scss.aboutUs__col2}>
    // 				<img
    // 					className={scss.aboutUs__col2_img1}
    // 					src={img1}
    // 					alt={img1}
    // 					data-aos="fade-up"
    // 					data-aos-delay="500"
    // 				/>
    // 				<img className={scss.aboutUs__col2_img2} src={img2} alt={img2} />
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
    <AboutUs />
  );
};

export default Company;
