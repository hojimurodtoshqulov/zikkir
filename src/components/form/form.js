import scss from "./form.module.scss";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
const Form = ({ formProject }) => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
	});
	const handle = (e) => {
		const newData = { ...formValues };
		newData[e.target.id] = e.target.value;
		setFormValues(newData);
		console.log(newData);
	};
	const onSubmit = async (e) => {
		e.preventDefault();

		console.log("submit", formValues);
		const name = formValues.name.value;
		const phone = formValues.phone.value;
		// const message = formValues.message.value;
		// const payload = {
		// 	// message: message,
		// 	messageInfo: {
		// 		status: true,
		// 		statusMessage: "Name: " + name + "Phone: " + phone,
		// 	},
		// };
		try {
			const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1001762218496&text=${
				"Proekt:" +
				formProject +
				" " +
				"\n        Tel:" +
				formValues.phone +
				" " +
				"\n        Ismi:" +
				formValues.name
			}`;
			await axios
				.post(url, {
					name: formValues.name,
					phone: formValues.phone,
					// project: formProject,
				})
				.then((res) => {
					console.log(res.data);
				});
		} catch (error) {
			console.error(error);
		}
		setFormValues({ name: "", phone: "" });
	};
	return (
		<div className={scss.forms} data-aos="zoom-in-up">
			<h3 data-aos="flip-up" data-aos-delay="300">
				ПОЛУЧИТЬ ПОДРОБНУЮ КОНСУЛЬТАЦИЮ
			</h3>
			<p data-aos="flip-up" data-aos-delay="400">
				Мы свяжемся с вами как можно быстрее
			</p>
			<form
				action=""
				onSubmit={onSubmit}
				data-aos="flip-up"
				data-aos-delay="500"
			>
				<input
					id="project"
					onChange={(e) => handle(e)}
					value={formProject}
					type="text"
					required
					style={{ display: "none" }}
				/>
				<input
					id="name"
					onChange={(e) => handle(e)}
					value={formValues.name}
					type="text"
					required
					placeholder="Ваше имя:"
				/>
				<input
					id="phone"
					onChange={(e) => handle(e)}
					value={formValues.phone}
					type="text"
					required
					placeholder="Тел:"
				/>
				<button type="submit">
					<span>
						Отправить
						<FaChevronRight />
					</span>
				</button>
			</form>
			<p data-aos="flip-up" data-aos-delay="600">
				Свяжитесь с нами и получите бесплатную консультацию!
			</p>
		</div>
	);
};

export default Form;
