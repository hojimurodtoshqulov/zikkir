import scss from "./projectsAbout.module.scss";
import { useTranslation } from "react-i18next";

const ProjectsAbout = ({
	titleAbout,
	text1About,
	text2About,
	imgAbout,
	titleAdvantages,
	textAdvantages,
	img1,
	img2,
	img3,
	img4,
	img5,
	title1,
	title2,
	title3,
	title4,
	title5,
}) => {
	const { t } = useTranslation();
	return (
		<div className={scss.projectsAbout}>
			<img
				data-aos="fade-left"
				data-aos-delay="100"
				className={scss.projectsAboutImg}
				src={imgAbout}
				alt={imgAbout}
			/>
			<div
				data-aos="fade-left"
				data-aos-delay="400"
				className={scss.projectsAboutImgBG}
			></div>
			<div className="container">
				<div className={scss.aboutProject} data-aos="fade-up">
					<div className={scss.aboutProjectCol1}>
						<h2>{t("projects.projectsAbout")}</h2>
						<p> {text1About} </p>
						<p> {text2About} </p>
					</div>
				</div>
				<div className={scss.elements} data-aos="fade-up">
					<h2 data-aos="flip-up">{t("projects.projectsAdvantages")}</h2>
					<p data-aos="flip-up">{textAdvantages}</p>
					<div className={scss.elementsImgDiv}>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img1}")` }}
							data-aos="fade-right"
						>
							<p> {title1}</p>
						</div>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img2}")` }}
							data-aos="fade-left"
						>
							<p> {title2}</p>
						</div>
					</div>
					<div className={scss.elementsImgDiv} data-aos="flip-up">
						<div
							className={scss.elementsImgDivHidden}
							style={{
								backgroundImage: `url("${img3}")`,
								textAlign: "center",
							}}
						>
							<p
								style={{
									margin: "0 auto",
								}}
							>
								 {title3}
							</p>
						</div>
					</div>
					<div className={scss.elementsImgDiv}>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img4}")` }}
							data-aos="fade-left"
						>
							<p>  {title4} </p>
						</div>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img5}")` }}
							data-aos="fade-right"
						>
							<p> {title5}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsAbout;
