import scss from "./map_form.module.scss";
import { useState } from "react";
import axios from "axios";

const Map_form = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		message: "",
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
		const message = formValues.message.value;
		const payload = {
			message: message,
			messageInfo: {
				status: true,
				statusMessage: "Name: " + name + "Phone: " + phone,
			},
		};
		try {
			// const response = await fetch(
			// 	"https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage/-1001762218496",
			// 	{
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 		},
			// 		body: JSON.stringify(payload),
			// 	}
			// );
			const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1001762218496&text=${
				"Ismi:" +
				formValues.name +" "+
				"\n/      Tel:" +
				formValues.phone +" "+
				"\n/      Izoh:" +
				formValues.message
			}`;
			await axios
				.post(url, {
					name: formValues.name,
					phone: formValues.phone,
					message: formValues.message,
				})
				.then((res) => {
					console.log(res.data);
				});
			// console.log(response);
			// const data = await response.json();
			// console.log(data);
		} catch (error) {
			console.error(error);
		}
		setFormValues({ name: "", phone: "", message: "" });
	};
	return (
		<div className={scss.mapForm}>
			<div className="container">
				<div className={scss.mapForm__elements}>
					<div className={scss.mapForm__elements_col1}>
						<div className={scss.map} data-aos="fade-up-right">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.9243272877084!2d65.78276940204378!3d38.83419385043215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea8a25d2ad597%3A0x628d2f6cd87984a7!2zMjcgVWxpdHNhIE5hc2FmLCBRYXJzaGksINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1692023477339!5m2!1sru!2s"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
					<div className={scss.mapForm__elements_col2} data-aos="fade-up-left">
						<h2>У вас остались вопросы?</h2>
						<p>
							Остались вопросы? Напишите нам и наши специалисты ответят вам в
							течение 30 минут!
						</p>
						<form action="" onSubmit={onSubmit}>
							<input
								id="name"
								onChange={(e) => handle(e)}
								value={formValues.name}
								type="text"
								placeholder="Ваше имя..."
							/>
							<input
								id="phone"
								onChange={(e) => handle(e)}
								value={formValues.phone}
								type="text"
								placeholder="Ваш телефон..."
							/>
							<input
								id="message"
								onChange={(e) => handle(e)}
								value={formValues.message}
								type="text"
								placeholder="Ваш вопрос..."
							/>
							<button type="submit">Отправить сообщение</button>
							<p>
								Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности{" "}
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Map_form;
