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
import school from "../../media/school.png";
import alphabet from "../../media/alphabet.png";
import bank from "../../media/bank.png";
import mall from "../../media/mall.png";
const SuperLocation = ({ bgImg, space }) => {
	return (
		<div
			className={scss.superLocation}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className="container">
				<h2 data-aos="fade-up">УДОБНАЯ ЛОКАЦИЯ</h2>
				<div className={scss.superLocation__elements}>
					<div className={scss.superLocation__elements_col1}>
						<div className={scss.map} data-aos="fade-up-right">
							<iframe
								src={space}
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
					<div
						className={scss.superLocation__elements_col2}
						data-aos="fade-up-left"
					>
						{/* <div className={scss.row1}>
              <img src={img1} alt={img1} />
              Как добраться
            </div> */}
						<div className={scss.row2}>
							<div
								className={scss.row2__ele}
								style={{
									background: "#0fbaee94",
									backdropFilter: "blur(7px)",
									
								}}
							>
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
								<div className={scss.row2__ele_div}>
									<div>
										<img src={school} alt={school} />
									</div>
									<span>Школа</span>
								</div>
								<div className={scss.row2__ele_div}>
									<div>
										<img src={alphabet} alt={alphabet} />
									</div>
									<span>Детский сад</span>
								</div>
							</div>
							<div className={scss.row2__ele}>
								<div className={scss.row2__ele_div}>
									<div>
										<img src={bank} alt={bank} />
									</div>
									<span>Хакимият г.Карши</span>
								</div>
								<div className={scss.row2__ele_div}>
									<div>
										<img src={mall} alt={mall} />
									</div>
									<span>ТРЦ Sharq</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuperLocation;
