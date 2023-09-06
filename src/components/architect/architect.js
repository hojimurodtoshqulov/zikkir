import scss from "./architect.module.scss";
import { useTranslation } from "react-i18next";
const Architect = ({
	bgImg1,
	title1,
	title2,
	title3,
	title4,
	title5,
	img1,
	img2,
	img3,
	img4,
	img5,
	text,
}) => {
	const { t } = useTranslation();
	return (
		<div
			className={scss.architect}
			style={{ backgroundImage: `url(${bgImg1})` }}
		>
			<div
				className="container"
				// style={{

				// }}
				data-aos="fade-up"
			>
				<div className={scss.architectElement}>
					<h2 data-aos="flip-up"> {t("projects.projectsArchitect")}</h2>
					<div className={scss.elements}>
						<div className={scss.elementsRow}>
							<div className={scss.elementsRowDiv} data-aos="fade-up-left">
								<img src={img1} alt={img1} />
								<p>{title1} </p>
							</div>
							<div className={scss.elementsRowDiv} data-aos="fade-up-right">
								<img src={img2} alt={img2} />
								<p>{title2} </p>
							</div>
						</div>
						<div className={scss.elementsRow}>
							<div className={scss.elementsRowDiv} data-aos="fade-down-left">
								<img src={img3} alt={img3} />
								<p> {title3} </p>
							</div>
							<div className={scss.elementsRowDiv} data-aos="fade-down-right">
								<img src={img4} alt={img4} />
								<p>{title4} </p>
							</div>
						</div>
						<div className={scss.elementsRow}>
							<div className={scss.elementsRowDiv} data-aos="fade-down">
								<img src={img5} alt={img5} />
								<p>
									<span> {title5} </span>
								</p>
							</div>
						</div>
					</div>
					<p className={scss.architectText} data-aos="flip-up">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Architect;
