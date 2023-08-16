
import scss from "./footer.module.scss";
import logo from "../../media/logo_footer.png";
import { Link,  useNavigate} from "react-router-dom";
export default function Footer () {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const navigate = useNavigate()
	return (
		<footer className={scss.footer}>
			<div className="container">
				<div className={scss.footer__line}></div>
				<div className={scss.footer__row1}>
					<div onClick={() => navigate('/')} className={scss.footer__row1_col}>
						<img className={scss.footer__logo} src={logo} alt="" />
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>Контактная информация</h4>
						<p>
							<a href="mail:shuxratuljaboyev@gmail.com">
								<span>shuxratuljaboyev@gmail.com</span>
							</a>
						</p>
						<p>
							<a href="tel:+998336450555">+998 33 645 05 55</a>
							<a href="tel:+998335250555">+998 33 525 05 55</a>
						</p>
						<p
							style={{
								lineHeight: 1.5,
								fontSize: "18px",
							}}
						>
							Офис - Карши, Насаф улица 27a дом
						</p>
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>Основные ссылки</h4>
						<Link
							to="/company"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							О нас <p></p>
						</Link>
						<Link
							to="/news"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Новости <p></p>
						</Link>

						<Link
							to="/contact"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Контакты <p></p>
						</Link>
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>Наши проекты</h4>
						<Link
							to="/paxtazor"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Paxtazor <p></p>
						</Link>
						<Link
							to="/cholquvar"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Cholquvar <p></p>
						</Link>
					</div>
					<div className={scss.footer__row1_col}>
						<h4 className={scss.footer__row1_col__title}>Социальные сети</h4>

						<Link
							to="/Telegram"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Telegram
						</Link>
						<Link
							to="/Instagram"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Instagram 
						</Link>
						<Link
							to="/Facebook"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							Facebook 
						</Link>
						<Link
							to="/YouTube"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							YouTube
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

