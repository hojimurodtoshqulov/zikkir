import scss from "./projectsAbout.module.scss";

const ProjectsAbout = ({ img1, img2, img3, img4, img5 }) => {
	return (
		<div className={scss.projectsAbout}>
			<div className="container">
				<div className={scss.elements} data-aos="fade-up">
					<h2 data-aos="flip-up">5 ФАКТОВ О ПРОЕКТЕ</h2>
					<p data-aos="flip-up">
						В центральной части Ташкента мы создали концептуальное жилое
						пространство, гармонично сочетающее современные представления об
						абсолютном удобстве
					</p>
					<div className={scss.elementsImgDiv}>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img1}")` }}
							data-aos="fade-right"
						>
							<p>1. Супер - локация</p>
						</div>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img2}")` }}
							data-aos="fade-left"
						>
							<p>2. Детская - площадка</p>
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
								3. Удобная парковка на 100 машин
							</p>
						</div>
					</div>
					<div className={scss.elementsImgDiv}>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img4}")` }}
							data-aos="fade-left"
						>
							<p> 4. Lorem, ipsum.</p>
						</div>
						<div
							className={scss.elementsImgDivHidden}
							style={{ backgroundImage: `url("${img5}")` }}
							data-aos="fade-right"
						>
							<p>5. Lorem, ipsum.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsAbout;
