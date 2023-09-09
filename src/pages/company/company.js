import scss from "./company.module.scss";
import img1 from "../../media/u6.1.png";
import img2 from "../../media/logo_white.png";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MainSymbol from "../../components/mainSymbol/mainSymbol";
import AboutUs from "../../components/aboutUs/aboutUs";
import Map_form from "../../components/map_form/map_form";
const Company = () => {
	const transition = { type: "spring", duration: 2 };
	const { t } = useTranslation();
	return (
		<>
			<AboutUs />
			<Map_form />
		</>
	);
};

export default Company;
