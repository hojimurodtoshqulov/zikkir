import React, { Suspense } from "react";
import "./home.scss";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/header";
import AboutUs from "../../components/aboutUs/aboutUs";
import Advantages from "../../components/advantages/advantages";
import Projects from "../../components/projects/projects";
import News from "../../components/news/news";
// import Form from "../../components/form/form";
import Map_form from "../../components/map_form/map_form";
const Home = () => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const { t } = useTranslation();
	return (
		<Suspense fallback="loading">
			<div className="main home">
				<input type="checkbox" id="navLinks__menu" />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<Header />
				<AboutUs />
				<Advantages />
				<Projects />
				<News />
				{/* <Form /> */}
				<Map_form />
			</div>
		</Suspense>
	);
};
export { Home };
