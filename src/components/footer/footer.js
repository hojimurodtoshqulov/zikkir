import { useEffect, useState } from "react";
import scss from "./footer.module.scss";
import logo from "../../media/logo_footer.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Footer = () => {
  const [year, setyear] = useState(0);

  useEffect(() => {});
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const transition = { type: "spring", duration: 2 };
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.footer__line}></div>
        <div className={scss.footer__row1}>
          <div className={scss.footer__row1_col1} data-aos="fade-left">
            <Link
              to="/"
              className={scss.footer__row1_col1_logo}
              onClick={scrollToTop}
            >
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={scss.footer__row1_col3} data-aos="fade-right">
            <h4>Контактная информация</h4>
            <p>
              <a href="mail:info@zikkir">
                <span>info@zikkir</span>
              </a>
            </p>
            <p>
              <a href="tel:+998336450555">+998 33 645 05 55</a>
              <a href="tel:+998335250555">+998 33 525 05 55</a>
            </p>
            <p>
              Г. Ташкент, Яшнабадский р-н, ул. Паркентская, д. 180, Ориентир:
              бывшая «Корзинка Авиатор»
            </p>
          </div>
          <div className={scss.footer__row1_col2} data-aos="fade-down">
            <h4>Основные ссылки</h4>
            <Link
              to="/company"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              О компании <p></p>
            </Link>
            <Link
              to="/news"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              Новости <p></p>
            </Link>
            <Link
              to="/company"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              О нас <p></p>
            </Link>

            <Link
              to="/contact"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              Контакты <p></p>
            </Link>
          </div>
          <div className={scss.footer__row1_col2} data-aos="fade-up">
            <h4>Наши проекты</h4>
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
            {/* <Link
              to="/contact"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              Lorem ipsum <p></p>
            </Link>
            <Link
              to="/programs"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              Lorem ipsum <p></p>
            </Link> */}
          </div>
          <div className={scss.footer__row1_col2} data-aos="fade-down">
            <h4>Социальные сети</h4>

            <Link
              to="/Telegram"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              Telegram <p></p>
            </Link>
            <Link
              to="/Instagram"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              Instagram <p></p>
            </Link>
            <Link
              to="/Facebook"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              Facebook <p></p>
            </Link>
            <Link
              to="/YouTube"
              className={scss.footer__row1_col2_link}
              onClick={scrollToTop}
            >
              YouTube <p></p>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className={scss.footer__row2}>
				<motion.p
					initial={{
						transform: "rotate(30deg)",
						transformOrigin: " right top",
					}}
					whileInView={{
						transform: "rotate(0deg)",
						transformOrigin: " right top",
					}}
					transition={{ transition, duration: 1 }}
				>
					OOO &nbsp; <Link to="/">" ZIK KIR "</Link>&nbsp; 2021 - 2023
					<span></span>
				</motion.p>
			</div> */}
    </footer>
  );
};
export default Footer;
