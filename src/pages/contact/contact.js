import "./contact.scss";
import ContactHeader from "../../components/contactHeader/contactHeader";
import img1 from "../../media/contactImg.png";
import Map_form from "../../components/map_form/map_form";
import { useTranslation } from "react-i18next";
const Contact = () => {
const { t } = useTranslation();
	return (
		<main className="contact">
			<ContactHeader bgImage={img1} />
			<Map_form />
		</main>
	);
};

export default Contact;
