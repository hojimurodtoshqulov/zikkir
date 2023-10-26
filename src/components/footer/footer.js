import scss from "./footer.module.scss";
import logo from "../../media/logo_footer.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const navigate = useNavigate();
	return (
		<footer className={scss.footer}>
			<div className="container">
				<div className={scss.footer__line}></div>
				<div className={scss.footer__row1}>
					<div onClick={() => navigate("/")} className={scss.footer__row1_col}>
						<img className={scss.footer__logo} src={logo} alt="" />
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>
							{t("home.footer.title1")}
						</h4>
						<p>
							<a href="mailto:info@zikkirbuildings.uz">
								<span>info@zikkirbuildings.uz</span>
							</a>
						</p>
						<p>
							<a href="tel:+998555150005">+998 55 515 00 05</a>
							<a href="tel:+998335250555">+998 33 525 05 55</a>
						</p>
						<p
							style={{
								lineHeight: 1.5,
								fontSize: "18px",
							}}
						>
							{t("home.footer.address")}
						</p>
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>
							{t("home.footer.title2")}
						</h4>
						<Link
							to="/company"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							{t("nav.company")} <p></p>
						</Link>
						<Link
							to="/news"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							{t("nav.news")} <p></p>
						</Link>

						<Link
							to="/contact"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							{t("nav.contact")} <p></p>
						</Link>
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>
							{t("home.footer.title3")}
						</h4>
						<Link
							to="/paxtazor"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Paxtazor residence <p></p>
						</Link>
						<Link
							to="/cho'lquvar"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Cho'lquvar TJM <p></p>
						</Link>
						<Link
							to="/smart"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Smart Cho'lquvar <p></p>
						</Link>
						<Link
							to="/eskiShahar"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Eski shahar <p></p>
						</Link>
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>
							{t("home.footer.title4")}
						</h4>

						<a
							target="_blank"
							href="https://t.me/zikkir_buildings"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Telegram
						</a>
						<a
							target="_blank"
							href="https://www.instagram.com/zikkir_buildings/"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Instagram
						</a>
						<a
							target="_blank"
							href="https://www.facebook.com/profile.php?id=100094604190201"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Facebook
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
