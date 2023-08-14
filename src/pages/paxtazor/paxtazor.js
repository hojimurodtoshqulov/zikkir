import React, { Suspense } from "react";
import scss from "./paxtazor.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/form/form";
// import Map_form from "../../components/map_form/map_form";
import ProjectsHeader from "../../components/projectsHeader/projectsHeader";
import logo from "../../media/paxtazor.png";
import img1 from "../../media/u4.png";
import img2 from "../../media/u11.png";
import img3 from "../../media/u17.png";
import img4 from "../../media/Rectangle 1293.png";
import img5 from "../../media/Rectangle 1294.png";
import img6 from "../../media/u15.png";
import img7 from "../../media/u2.png";
import archImg1 from "../../media/arch1.png";
import archImg2 from "../../media/arch2.png";
import archImg3 from "../../media/arch3.png";
import archImg4 from "../../media/arch4.png";
import archImg5 from "../../media/arch7.png";
import ProjectsAbout from "../../components/projectsAbout/projectsAbout";
import SuperLocation from "../../components/superLocation/superLocation";
import Architect from "../../components/architect/architect";
import ProjectPlan from "../../components/projectPlan/projectPlan";
const Paxtazor = () => {
	return (
		<Suspense fallback="loading">
			<div className={scss.paxtazor}>
				<ProjectsHeader bgImage={img1} logo={logo} />
				<ProjectsAbout
					title={"5 ФАКТОВ О ПРОЕКТЕ"}
					text={
						"В центральной части Карши мы создали идеальное сочетание стиля, безопасности и комфорта благодаря современным технологиям и квалифицированности наших специалистов"
					}
					img1={img2}
					img2={img3}
					img3={img4}
					img4={img5}
					img5={img6}
					title1={"Удобная локация"}
					title2={"Детская площадка"}
					title3={
						"Чистый питьевой вода с запасом воды на 80 тонн и многими другими удобствами"
					}
					title4={"Отдельная канализация"}
					title5={"Парковка имеется"}
				/>
				<SuperLocation
					bgImg={img7}
					space={
						"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3104.472378174517!2d65.79640461691929!3d38.83663871991241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUwJzExLjQiTiA2NcKwNDcnNDcuNSJF!5e0!3m2!1sru!2s!4v1691735889056!5m2!1sru!2s"
					}
				/>
				<Form />
				<Architect
					bgImg1={img1}
					img1={archImg1}
					img2={archImg2}
					img3={archImg3}
					img4={archImg4}
					img5={archImg5}
					title1={"Инновационная Архитектура"}
					title2={"Европейские Материалы Фасада"}
					title3={"Витражное Остекление"}
					title4={"Увеличенная Высота Потолков В Чистоте"}
					title5={"Автоклавный газаблок"}
				/>
				<ProjectPlan />
				{/* <Map_form /> */}
			</div>
		</Suspense>
	);
};
export { Paxtazor };
