import scss from "./architect.module.scss";
import img1 from "../../media/arch1.png";
import img2 from "../../media/arch2.png";
import img3 from "../../media/arch3.png";
import img4 from "../../media/arch4.png";
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
			>
				<h2>ПЕРЕДОВАЯ АРХИТЕКТУРА</h2>
				<div className={scss.elements}>
					<div className={scss.elementsRow}>
						<div className={scss.elementsRowDiv}>
							<img src={img1} alt={img1} />
							<p>Инновационная Архитектура</p>
						</div>
						<div className={scss.elementsRowDiv}>
							<img src={img2} alt={img2} />
							<p>Европейские Материалы Фасада</p>
						</div>
					</div>
					<div className={scss.elementsRow}>
						<div className={scss.elementsRowDiv}>
							<img src={img3} alt={img3} />
							<p>Витражное Остекление</p>
						</div>
						<div className={scss.elementsRowDiv}>
							<img src={img4} alt={img4} />
							<p>Увеличенная Высота Потолков В Чистоте</p>
						</div>
					</div>
				</div>
				<p className={scss.architectText}>
					Подходя к архитектуре, как к искусству, команда создала проект с
					узнаваемым творческим почерком.Особый шарм и очарование Сhoquvar
					невозможно будет перепутать с другим жилым комплексом в Ташкенте.
				</p>
			</div>
		</div>
	);
};

export default Architect;
