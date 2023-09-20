import React, { Suspense } from "react";
import scss from "./smart.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/form/form";
// import Map_form from "../../components/map_form/map_form";
import ProjectsHeader from "../../components/projectsHeader/projectsHeader";
import logo from "../../media/smartLogo.png";
import smartBG from "../../media/smart1,1.png";
import img1 from "../../media/smart3.png";
import img2 from "../../media/smart1.png";
import img3 from "../../media/smart5.png";
import img4 from "../../media/Rectangle 1293.png";
import img5 from "../../media/Rectangle 1294.png";
import img6 from "../../media/smart4.png";
import img7 from "../../media/smart3.png";
import archImg1 from "../../media/arch1.png";
import archImg2 from "../../media/arch2.png";
import archImg3 from "../../media/arch3.png";
import archImg4 from "../../media/arch4.png";
import archImg5 from "../../media/arch7.png";
import pPimg1 from "../../media/2,2.png";
import pPimg2 from "../../media/2,3.png";
import pPimg3 from "../../media/2,5.png";
import pPimg4 from "../../media/2,1.png";
import pPimg5 from "../../media/2,4.png";
import imgAbout from "../../media/smart2.png";
import ProjectsAbout from "../../components/projectsAbout/projectsAbout";
import SuperLocation from "../../components/superLocation/superLocation";
import Architect from "../../components/architect/architect";
import ProjectPlan from "../../components/projectPlan/projectPlan";
import { useTranslation } from "react-i18next";
const Smart = () => {
	const { t } = useTranslation();
	const data = [
		{
			img: pPimg1,
			text: t("paxtazor.projectPlan.title1"),
			title: t("paxtazor.projectPlan.text1"),
		},
		{
			img: pPimg2,
			text: t("paxtazor.projectPlan.title2"),
			title: t("paxtazor.projectPlan.text2"),
		},
		{
			img: pPimg3,
			text: t("paxtazor.projectPlan.title3"),
			title: t("paxtazor.projectPlan.text3"),
		},
		{
			img: pPimg4,
			text: t("paxtazor.projectPlan.title4"),
			title: t("paxtazor.projectPlan.text4"),
		},
		{
			img: pPimg5,
			text: t("paxtazor.projectPlan.title5"),
			title: t("paxtazor.projectPlan.text5"),
		},
	];
	return (
		<Suspense fallback="loading">
			<div className={scss.smart}>
				<ProjectsHeader bgImage={smartBG} logo={logo} />
				<ProjectsAbout
					text1About={t("smart.aboutProject.text1")}
					text2About={t("smart.aboutProject.text2")}
					textAdvantages={t("smart.advanteges.text")}
					imgAbout={imgAbout}
					img1={img2}
					img2={img3}
					img3={img4}
					img4={img5}
					img5={img6}
					title1={t("smart.advanteges.title1")}
					title2={t("smart.advanteges.title2")}
					title3={t("smart.advanteges.title3")}
					title4={t("smart.advanteges.title4")}
					title5={t("smart.advanteges.title5")}
				/>
				<SuperLocation
					bgImg={img7}
					space={
						"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3104.472378174517!2d65.79640461691929!3d38.83663871991241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUwJzExLjQiTiA2NcKwNDcnNDcuNSJF!5e0!3m2!1sru!2s!4v1691735889056!5m2!1sru!2s"
					}
				/>
				<Form formProject={" Smart "} />
				<Architect
					bgImg1={img1}
					img1={archImg1}
					img2={archImg2}
					img3={archImg3}
					img4={archImg4}
					img5={archImg5}
					title1={t("smart.architect.title1")}
					title2={t("smart.architect.title2")}
					title3={t("smart.architect.title3")}
					title4={t("smart.architect.title4")}
					title5={t("smart.architect.title5")}
					text={t("smart.architect.text")}
				/>
				<ProjectPlan datas={data} />
			</div>
		</Suspense>
	);
};
export { Smart };
