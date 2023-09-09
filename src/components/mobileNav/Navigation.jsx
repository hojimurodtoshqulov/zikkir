import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import navLogo from "../../media/logo_head.png";
const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const variantsItem = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Navigation = ({ toggleOpen }) => {
	const { i18n, t } = useTranslation();

	const currentLang = i18n.language === "en-US" ? "ru" : i18n.language;

	const changeLang = (lngCode) => {
		i18n.changeLanguage(lngCode);
	};
	const scrollToTop = () => {
		toggleOpen();
		window.scrollTo(0, 0);
	};
	return (
		<motion.ul variants={variants}>
			<Link onClick={scrollToTop} className="logo" to="/">
				<img
					className="logo__img"
					src={navLogo}
					alt="nav logo"
					style={{ backdropFilter: "drop-shadow(4px 4px 10px rgb(0, 0, 0))" }}
				/>
			</Link>
			<MenuItem toggleOpen={toggleOpen} title={t("nav.company")} href={"company"} />
			<MenuItem toggleOpen={toggleOpen} title={t("nav.news")} href={"news"} />
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("nav.contact")}
				href={"contact"}
			/>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("Cho'lquvar")}
				href={"cho'lquvar"}
			/>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("Paxtazor")}
				href={"paxtazor"}
			/>
			<MenuItem toggleOpen={toggleOpen} title={t("Smart")} href={"smart"} />
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("Eski shahar")}
				href={"eskiShahar"}
			/>
			<motion.div variants={variantsItem}>
				<a href="tel:+998336450555">+998 33 645 05 55</a>
			</motion.div>
		</motion.ul>
	);
};
