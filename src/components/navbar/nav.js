import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/logo_head.png";
import scss from "./nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "../button/button";
import sun from "../../media/sun-solid.svg";
import moon from "../../media/moon-solid.svg";
import Toggle from "../theme/toggleTheme";
const Nav = ({ onClick }) => {
  const [navColorBg, setnavColorBg] = useState(0);
  const [navSize, setnavSize] = useState("12vh");
  const [navSizeMobile, setnavSizeMobile] = useState("9.4vh");
  const [navBg, setNavBg] = useState("transparent");
  const [navLinkColor, setNavLinkColor] = useState("");
  // const [navContainerBR, setNavContainerBR] = useState("2px solid #fff");
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColorBg(10) : setnavColorBg(0);
    window.scrollY > 80 ? setnavSize("10vh") : setnavSize("12vh");
    window.scrollY > 80 ? setNavLinkColor("#fff") : setNavLinkColor("");
    window.scrollY > 80 ? setnavSizeMobile("9.4vh") : setnavSizeMobile("9.4vh");
    window.scrollY > 80 ? setNavBg("#a9a7a749") : setNavBg("transparent");
    // window.scrollY > 80
    // 	? setNavContainerBR("2px solid #ff00")
    // 	: setNavContainerBR("2px solid #fff");
  };
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const [langCheck, setLangCheck] = useState(1);
  const [langColor, _] = useState("");
  const currentLang = i18n.language === "en-US" ? "ru" : i18n.language;
  const checkLangImg = (e) => {
    if (e.target.value === "ru") {
      i18n.changeLanguage("ru");
      setLangCheck(2);
    } else {
      setLangCheck(1);
      i18n.changeLanguage("uz");
    }
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const width = () => {
    if (window.innerWidth > 765) {
      return navSize;
    } else {
      return navSizeMobile;
    }
  };

  return (
    <Suspense fallback="loading">
      <nav
        className={scss.nav}
        style={{
          backdropFilter: `blur(${navColorBg}px)`,
          background: navBg,
          transition: "all 0.8s",
          height: width(),
        }}
      >
        <div className="container">
          <div className={scss.nav__container} style={{ height: width() }}>
            <Link
              style={{ color: navLinkColor }}
              onClick={scrollToTop}
              className={scss.nav__container_logo}
              to="/"
            >
              <img src={navLogo} alt={navLogo} />
            </Link>
            <div className={scss.nav__container_links}>
              {/* company */}
              <NavLink
                style={{ color: navLinkColor }}
                to="/company"
                onClick={scrollToTop}
              >
                {t("nav.company")} <span></span>
              </NavLink>{" "}
              <Link
                style={{ color: navLinkColor }}
                onClick={scrollToTop}
                className={scss.dropdown}
              >
                {t("nav.projects")}
                <AiFillCaretDown />
                <div className={scss.dropdownItems}>
                  <div>
                    <Link to="/cho'lquvar" onClick={scrollToTop}>
                      {t("Cho'lquvar")}
                    </Link>
                    <Link to="/paxtazor" onClick={scrollToTop}>
                      {t("Paxtazor")}
                    </Link>
                  </div>
                </div>
              </Link>{" "}
              <NavLink
                style={{ color: navLinkColor }}
                to="/news"
                onClick={scrollToTop}
              >
                {t("nav.news")} <span></span>
              </NavLink>{" "}
              <NavLink
                style={{ color: navLinkColor }}
                to="/contact"
                onClick={scrollToTop}
              >
                {t("nav.contact")} <span></span>
              </NavLink>
              {/* <NavLink
								style={{ color: navLinkColor }}
								to="/layout"
								onClick={scrollToTop}
							>
								{t("nav.layout")} <span></span>
							</NavLink> */}
            </div>
            {/* <Toggle color={navLinkColor} /> */}
            <div className={scss.nav__container_lang}>
              <span
                className={scss.nav__container_lang_ru}
                onClick={checkLangImg}
                value={"ru"}
              >
                <button
                  className={currentLang === "ru" && scss.active}
                  value={"ru"}
                  onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                >
                  {/* {t("ru")} */}
                </button>
                <div></div>
              </span>
              <span
                className={scss.nav__container_lang_uz}
                onClick={checkLangImg}
                value={"uz"}
              >
                <button
                  className={currentLang === "uz" && scss.active}
                  value={"uz"}
                  onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                >
                  {/* {t("uz")} */}
                </button>
                <div></div>
              </span>
            </div>
            <a href="tel:+998336450555">+998 33 645 05 55</a>
          </div>
        </div>
      </nav>
    </Suspense>
  );
};
export { Nav };
