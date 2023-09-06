import scss from "./form.module.scss";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();
	return (
		<div className={scss.forms} data-aos="zoom-in-up">
			<h3 data-aos="flip-up" data-aos-delay="300">
				{t("projects.projectsForm.title")}
			</h3>
			<p data-aos="flip-up" data-aos-delay="400">
				{t("projects.projectsForm.text1")}
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
					placeholder={t("projects.projectsForm.input1")}
				/>
				<input
					id="phone"
					onChange={(e) => handle(e)}
					value={formValues.phone}
					type="text"
					required
					placeholder={t("projects.projectsForm.input2")}
				/>
				<button type="submit">
					<span>
						{t("projects.projectsForm.btn")}
						<FaChevronRight />
					</span>
				</button>
			</form>
			<p data-aos="flip-up" data-aos-delay="600">
				{t("projects.projectsForm.text2")}
			</p>
		</div>
	);
};

export default Form;
