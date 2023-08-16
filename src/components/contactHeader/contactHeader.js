import scss from "./contactHeader.module.scss";
import img1 from "../../media/logo_white.png";
const ContactHeader = ({ bgImage, title }) => {
	return (
		<div
			className={scss.contactHeader}
			style={{ backgroundImage: `url("${bgImage}")` }}
		>
			<div className="container">
				<div className={scss.elements} data-aos="fade-up">
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol1} data-aos="fade-up-left">
							<p>
								Время работы <br />
								Отдел продаж: Пн-Пт: с <span>9:00</span> до <br />
								<span>20:00</span> Сб-ВС: с <span>9:00</span> до{" "}
								<span>20:00</span>
							</p>
						</div>
						<div className={scss.elementsDivCol1} data-aos="fade-up-right">
							<p>Круглосуточный кол-центр</p> <br />
							<a href="tel:+998788880000">78 888 00 00</a>
						</div>
					</div>
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol} data-aos="flip-up">
							<p>
								Мы расположены по адресу: <br />
								<span>
									Paxtazor residence г. Карши, Пахтазор МСГ, микрорайон
									Пахтазор, дом 7/75. <br />
									“Cho’lquvar Smart” г. Карши, Чулкувар МСГ, микрорайон 4, дом 8
								</span>
							</p>
						</div>
					</div>
					<div className={scss.elementsDiv}>
						<div className={scss.elementsDivCol} data-aos="flip-up">
							<p>
								Почтовые адреса Общая информация:{" "}
								<span>
									<a href="">info@gh.uz</a>{" "}
								</span>{" "}
								<br />
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
			<img
				src={img1}
				alt={img1}
				className={scss.contactHeaderImg}
				data-aos="fade-up"
				data-aos-delay="900"
			/>
			<div className={scss.contactHeaderImg2}>
				<img src={img1} alt={img1} data-aos="fade-up" data-aos-delay="900" />
			</div>
		</div>
	);
};

export default ContactHeader;
