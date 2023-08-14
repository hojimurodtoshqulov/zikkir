import scss from "./architect.module.scss";

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
}) => {
	return (
		<div
			className={scss.architect}
			style={{ backgroundImage: `url(${bgImg1})` }}
		>
			<div
				className="container"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "80px",
				}}
				data-aos="fade-up"
			>
				<h2 data-aos="flip-up">ПЕРЕДОВАЯ АРХИТЕКТУРА</h2>
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
					Подходя к архитектуре, как к искусству, команда создала проект с
					узнаваемым творческим почерком.Особый шарм и очарование Сho'lquvar
					невозможно будет перепутать с другим жилым комплексом в Ташкенте.
				</p>
			</div>
		</div>
	);
};

export default Architect;
