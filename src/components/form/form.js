import scss from "./form.module.scss";
import {FaChevronRight} from "react-icons/fa";
const Form = () => {
	return (
		<div className="container">
			<div className={scss.forms}>
				<h3>ПОЛУЧИТЬ ПОДРОБНУЮ КОНСУЛЬТАЦИЮ</h3>
				<p>Мы свяжемся с вами как можно быстрее</p>
				<form action="">
					<input type="text" placeholder="Ваше имя:" />
					<input type="text" placeholder="Тел:" />
					<button type="submit">
						<span>
								<FaChevronRight />
						</span>
						Отправить
					</button>
				</form>
				<p>Свяжитесь с нами и получите бесплатную консультацию!</p>
			</div>
		</div>
	);
};

export default Form;
