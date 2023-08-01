import scss from "./contactHeader.module.scss";
import img1 from "../../media/logo_white.png";
const ContactHeader = ({ bgImage, title }) => {
	return (
		<div
			className={scss.contactHeader}
			style={{ backgroundImage: `url("${bgImage}")` }}
		>
			<div className="container">
				<div className={scss.elements}>
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol1}>
							<p>
								Время работы <br />
								Отдел продаж: Пн-Пт: с <span>9:00</span> до <br />
								<span>19:00</span> Сб-ВС: с <span>10:00</span> до{" "}
								<span>18:00</span>
							</p>
						</div>
						<div className={scss.elementsDivCol1}>
							<p>Круглосуточный кол-центр</p> <br />
							<a href="tel:+998788880000">78 888 00 00</a>
						</div>
					</div>
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol}>
							<p>
								Мы расположены по адресу: <br />
								<span>
									Lorem ipsum ased ipsum lorem, Lorem ipsum ased ipsum
									loremLorem ipsum ased ipsum lorem
								</span>
							</p>
						</div>
					</div>
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol}>
							<p>
								Почтовые адреса Общая информация: {" "}
								<span>
									<a href="">info@gh.uz</a>{" "}
								</span> <br />
								Обратная связь:{" "}
								<span>
									<a href=""> feedback@gh.uz</a>{" "}
								</span>
								Отдел снабжения:{" "}
								<span>
									<a href="">supply@gh.uz</a>{" "}
								</span>
								Отдел продаж:{" "}
								<span>
									<a href="">sales@gh.uz</a>{" "}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<img src={img1} alt={img1} className={scss.contactHeaderImg} />
			<img src={img1} alt={img1} className={scss.contactHeaderImg2} />
		</div>
	);
};

export default ContactHeader;
