import React, { Suspense } from "react";
import scss from "./paxtazor.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/form/form";
import Map_form from "../../components/map_form/map_form";
import ProjectsHeader from "../../components/projectsHeader/projectsHeader";
import img1 from "../../media/u4.png";
import img2 from "../../media/u7.png";
import img3 from "../../media/u17.png";
import img4 from "../../media/u18.png";
import img5 from "../../media/u19.png";
import img6 from "../../media/u11.png";
import img7 from "../../media/u2.png";
import ProjectsAbout from "../../components/projectsAbout/projectsAbout";
import SuperLocation from "../../components/superLocation/superLocation";
import Architect from "../../components/architect/architect";
import ProjectPlan from "../../components/projectPlan/projectPlan";
const Paxtazor = () => {
	return (
		<Suspense fallback="loading">
			<div className={scss.paxtazor}>
				<ProjectsHeader bgImage={img1} title={"Paxtazor"} />
				<ProjectsAbout
					img1={img2}
					img2={img3}
					img3={img4}
					img4={img5}
					img5={img6}
				/>
				<SuperLocation bgImg={img7} />
				<Form />
				<Architect bgImg1={img1} />
				<ProjectPlan />
				<Map_form />
			</div>
		</Suspense>
	);
};
export { Paxtazor };
