import React, { Suspense } from "react";
import scss from "./cho'lquvar.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/form/form";
// import Map_form from "../../components/map_form/map_form";
import ProjectsHeader from "../../components/projectsHeader/projectsHeader";
import img from "../../media/cholquvar.png";
import img1 from "../../media/u3.png";
import img2 from "../../media/u2.png";
import img3 from "../../media/u9.png";
import img4 from "../../media/u15.png";
import img5 from "../../media/u16.png";
import img6 from "../../media/u2.png";
import img7 from "../../media/u3.png";
import ProjectsAbout from "../../components/projectsAbout/projectsAbout";
import SuperLocation from "../../components/superLocation/superLocation";
import Architect from "../../components/architect/architect";
import ProjectPlan from "../../components/projectPlan/projectPlan";
const Cholquvar = () => {
	return (
		<Suspense fallback="loading">
			<div className={scss.cholquvar}>
				<ProjectsHeader bgImage={img1} logo={img} />
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
				/>
				<SuperLocation
					bgImg={img7}
					space={
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36436.3590327224!2d69.22648206127761!3d41.30390400192779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8afc5ecd0a29%3A0x2ff89e41e2381d4f!2sNEXT%20MALL!5e0!3m2!1sru!2s!4v1690799414742!5m2!1sru!2s"
					}
				/>
				<Form />
				<Architect bgImg1={img7} />
				<ProjectPlan />
				{/* <Map_form /> */}
			</div>
		</Suspense>
	);
};
export { Cholquvar };
