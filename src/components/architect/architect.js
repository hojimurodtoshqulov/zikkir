import scss from "./architect.module.scss";
import img1 from "../../media/arch1.png";
import img2 from "../../media/arch2.png";
import img3 from "../../media/arch5.png";
import img4 from "../../media/arch6.png";
const Architect = ({ bgImg1 }) => {
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
							<span>Инновационная Архитектура</span>
						</div>
						<div className={scss.elementsRowDiv} data-aos="fade-up-right">
							<img src={img2} alt={img2} />
							<span>Европейские Материалы Фасада</span>
						</div>
					</div>
					<div className={scss.elementsRow}>
						<div className={scss.elementsRowDiv} data-aos="fade-down-left">
							<img src={img3} alt={img3} />
							<span>Внутреннее Eco пространство</span>
						</div>
						<div className={scss.elementsRowDiv} data-aos="fade-down-right">
							<img src={img4} alt={img4} />
							<span>Надежная система безопасности</span>
						</div>
					</div>
				</div>
				<p className={scss.architectText} data-aos="flip-up">
					Подходя к архитектуре, как к искусству, команда создала проект с
					узнаваемым творческим почерком.Особый шарм и очарование Сhoquvar
					невозможно будет перепутать с другим жилым комплексом в Ташкенте.
				</p>
			</div>
		</div>
	);
};

export default Architect;
