import scss from "./projectsAbout.module.scss";

const ProjectsAbout = ({
	title,
	text,
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
	return (
		<div className={scss.projectsAbout}>
			<div className="container">
				<div className={scss.elements} data-aos="fade-up">
					<h2 data-aos="flip-up">{title}</h2>
					<p data-aos="flip-up">{text}</p>
					<div className={scss.elementsImgDiv}>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img1}")` }}
							data-aos="fade-right"
						>
							<p>1. {title1}</p>
						</div>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img2}")` }}
							data-aos="fade-left"
						>
							<p>2. {title2}</p>
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
								3. {title3}
							</p>
						</div>
					</div>
					<div className={scss.elementsImgDiv}>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img4}")` }}
							data-aos="fade-left"
						>
							<p> 4. {title4} </p>
						</div>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img5}")` }}
							data-aos="fade-right"
						>
							<p>5. {title5}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsAbout;
