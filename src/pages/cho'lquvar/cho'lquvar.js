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
import img4 from "../../media/Rectangle 1293.png";
import img5 from "../../media/Rectangle 1294.png";
import img6 from "../../media/u15.png"; //don't change
import img7 from "../../media/u3.png";
import archImg1 from "../../media/arch1.png";
import archImg2 from "../../media/arch2.png";
import archImg3 from "../../media/arch5.png";
import archImg4 from "../../media/arch6.png";
import archImg5 from "../../media/arch7.png";
import imgAbout from "../../media/u3.png";
import pPimg1 from "../../media/1,2.png";
import pPimg2 from "../../media/1,5.png";
import pPimg3 from "../../media/1,6.png";
import pPimg4 from "../../media/1,3.png";
import pPimg5 from "../../media/1,1.png";
import pPimg6 from "../../media/1,4.png";
import ProjectsAbout from "../../components/projectsAbout/projectsAbout";
import SuperLocation from "../../components/superLocation/superLocation";
import Architect from "../../components/architect/architect";
import ProjectPlan from "../../components/projectPlan/projectPlan";
import { useTranslation } from "react-i18next";
const Cholquvar = () => {
	const { t } = useTranslation();
	const data = [
		{
			img: pPimg1,
			text: t("cho'lquvar.projectPlan.title1"),
			title: t("cho'lquvar.projectPlan.text1"),
		},
		{
			img: pPimg2,
			text: t("cho'lquvar.projectPlan.title2"),
			title: t("cho'lquvar.projectPlan.text2"),
		},
		{
			img: pPimg3,
			text: t("cho'lquvar.projectPlan.title3"),
			title: t("cho'lquvar.projectPlan.text3"),
		},
		{
			img: pPimg4,
			text: t("cho'lquvar.projectPlan.title4"),
			title: t("cho'lquvar.projectPlan.text4"),
		},
		{
			img: pPimg5,
			text: t("cho'lquvar.projectPlan.title5"),
			title: t("cho'lquvar.projectPlan.text5"),
		},
		{
			img: pPimg6,
			text: t("cho'lquvar.projectPlan.title6"),
			title: t("cho'lquvar.projectPlan.text6"),
		},
	];

	return (
		<Suspense fallback="loading">
			<div className={scss.cholquvar}>
				<ProjectsHeader bgImage={img1} logo={img} />
				<ProjectsAbout
					text1About={t("cho'lquvar.aboutProject.text1")}
					text2About={t("cho'lquvar.aboutProject.text2")}
					textAdvantages={t("cho'lquvar.advanteges.text")}
					imgAbout={imgAbout}
					img1={img2}
					img2={img3}
					img3={img4}
					img4={img5}
					img5={img6}
					title1={t("cho'lquvar.advanteges.title1")}
					title2={t("cho'lquvar.advanteges.title2")}
					title3={t("cho'lquvar.advanteges.title3")}
					title4={t("cho'lquvar.advanteges.title4")}
					title5={t("cho'lquvar.advanteges.title5")}
				/>
				<SuperLocation
					bgImg={img7}
					space={
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.785940267012!2d65.79287394384703!3d38.83736294176741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea9be9c8c8967%3A0xa13aa61dafe266a4!2sCho&#39;lquvar%20buildings!5e0!3m2!1sru!2s!4v1694159408571!5m2!1sru!2s"
					}
				/>
				<Form formProject={" Cho'lquvar "} />
				<Architect
					bgImg1={img7}
					img1={archImg1}
					img2={archImg2}
					img3={archImg3}
					img4={archImg4}
					img5={archImg5}
					title1={t("cho'lquvar.architect.title1")}
					title2={t("cho'lquvar.architect.title2")}
					title3={t("cho'lquvar.architect.title3")}
					title4={t("cho'lquvar.architect.title4")}
					title5={t("cho'lquvar.architect.title5")}
					text={t("cho'lquvar.architect.text")}
				/>
				<ProjectPlan datas={data} />
			</div>
		</Suspense>
	);
};
export { Cholquvar };
