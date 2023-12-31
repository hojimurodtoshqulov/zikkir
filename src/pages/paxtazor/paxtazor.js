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
import pPimg1 from "../../media/2,2.png";
import pPimg2 from "../../media/2,3.png";
import pPimg3 from "../../media/2,5.png";
import pPimg4 from "../../media/2,1.png";
import pPimg5 from "../../media/2,4.png";
import imgAbout from "../../media/u7.png";
import ProjectsAbout from "../../components/projectsAbout/projectsAbout";
import SuperLocation from "../../components/superLocation/superLocation";
import Architect from "../../components/architect/architect";
import ProjectPlan from "../../components/projectPlan/projectPlan";
import { useTranslation } from "react-i18next";
const Paxtazor = () => {
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
			<div className={scss.paxtazor}>
				<ProjectsHeader bgImage={img1} logo={logo} />
				<ProjectsAbout
					text1About={t("paxtazor.aboutProject.text1")}
					text2About={t("paxtazor.aboutProject.text2")}
					textAdvantages={t("paxtazor.advanteges.text")}
					imgAbout={imgAbout}
					img1={img2}
					img2={img3}
					img3={img4}
					img4={img5}
					img5={img6}
					title1={t("paxtazor.advanteges.title1")}
					title2={t("paxtazor.advanteges.title2")}
					title3={t("paxtazor.advanteges.title3")}
					title4={t("paxtazor.advanteges.title4")}
					title5={t("paxtazor.advanteges.title5")}
				/>
				<SuperLocation
					bgImg={img7}
					space={
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.7419823119308!2d65.78420118299611!3d38.86126278244213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea73d7ded6827%3A0x28ad11f20714d7b1!2sPaxtazor%20Buildings!5e0!3m2!1sru!2s!4v1694167251568!5m2!1sru!2s"
					}
				/>
				{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.7419823119308!2d65.78420118299611!3d38.86126278244213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea73d7ded6827%3A0x28ad11f20714d7b1!2sPaxtazor%20Buildings!5e0!3m2!1sru!2s!4v1694167251568!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
				<Form formProject={" Paxtazor "} />
				<Architect
					bgImg1={img1}
					img1={archImg1}
					img2={archImg2}
					img3={archImg3}
					img4={archImg4}
					img5={archImg5}
					title1={t("paxtazor.architect.title1")}
					title2={t("paxtazor.architect.title2")}
					title3={t("paxtazor.architect.title3")}
					title4={t("paxtazor.architect.title4")}
					title5={t("paxtazor.architect.title5")}
					text={t("paxtazor.architect.text")}
				/>
				<ProjectPlan datas={data} />
				{/* <Map_form /> */}
			</div>
		</Suspense>
	);
};
export { Paxtazor };
