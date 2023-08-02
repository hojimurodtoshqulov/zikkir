import scss from "./form.module.scss";
import { FaChevronRight } from "react-icons/fa";
const Form = () => {
	return (
		<div className="container">
			<div className={scss.forms} data-aos="zoom-in-up">
				<h3 data-aos="flip-up" data-aos-delay="300">
					ПОЛУЧИТЬ ПОДРОБНУЮ КОНСУЛЬТАЦИЮ
				</h3>
				<p data-aos="flip-up" data-aos-delay="400">
					Мы свяжемся с вами как можно быстрее
				</p>
				<form action="" data-aos="flip-up" data-aos-delay="500">
					<input type="text" placeholder="Ваше имя:" />
					<input type="text" placeholder="Тел:" />
					<button type="submit">
						<span>
							<FaChevronRight />
						</span>
						Отправить
					</button>
				</form>
				<p data-aos="flip-up" data-aos-delay="600">
					Свяжитесь с нами и получите бесплатную консультацию!
				</p>
			</div>
		</div>
	);
};

export default Form;
