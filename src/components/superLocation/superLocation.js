import scss from "./superLocation.module.scss";
import img1 from "../../media/route.png";
import img2 from "../../media/route_footprint.png";
import img3 from "../../media/route_car.png";
import img4 from "../../media/route_bank.png";
import img5 from "../../media/route_hospital.png";
import img6 from "../../media/route_cart.png";
import img7 from "../../media/route_gym.png";
import img8 from "../../media/route_graduation.png";
import img9 from "../../media/route_restaurant.png";
const SuperLocation = ({ bgImg, space }) => {
	return (
		<div
			className={scss.superLocation}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<h2 data-aos="fade-up">СУПЕР ЛОКАЦИЯ</h2>
			<div className="container">
				<div className={scss.superLocation__elements}>
					<div className={scss.superLocation__elements_col1}>
						<div className={scss.map} data-aos="fade-up-right">
							<iframe
								src={space}
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
					<div
						className={scss.superLocation__elements_col2}
						data-aos="fade-up-left"
					>
						<div className={scss.row1}>
							<img src={img1} alt={img1} />
							Как добраться
						</div>
						<div className={scss.row2}>
							<div className={scss.row2__ele} style={{ background: "#0fb9ee" }}>
								<h5>
									<img src={img2} alt={img2} />
									Пешком
								</h5>
								<h5>
									<img src={img3} alt={img3} />
									На машине
								</h5>
							</div>
							<div className={scss.row2__ele}>
								<p>
									<img src={img4} alt={img4} />
									<span>3мин</span>,Банки
								</p>
								<p>
									<img src={img5} alt={img5} />
									<span>5мин</span>,Больницы, частные клиники
								</p>
							</div>
							<div className={scss.row2__ele}>
								<p>
									<img src={img6} alt={img6} />
									<span>8мин</span>,Супермаркеты, торговые центры
								</p>
								<p>
									<img src={img7} alt={img7} />
									<span>5мин</span>,Фитнес центры, SPA
								</p>
							</div>
							<div className={scss.row2__ele}>
								<p>
									<img src={img8} alt={img8} />
									<span>5мин</span>,Престижные учебные заведения
								</p>
								<p>
									<img src={img9} alt={img9} />
									<span>5мин</span>,Кафе, рестораны
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuperLocation;
