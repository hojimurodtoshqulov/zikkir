import scss from "./newsHeader.module.scss";
import img1 from "../../media/logo_white.png";
const NewsHeader = ({ bgImage, title }) => {
	return (
		<div
			className={scss.newsHeader}
			style={{ backgroundImage: `url("${bgImage}")` }}
		>
			<h1 data-aos="zoom-in-up"> НОВОСТИ</h1>
			<img src={img1} alt={img1} className={scss.newsHeaderImg} data-aos="fade-up" />
			<div className={scss.newsHeaderImg2}><img src={img1} alt={img1} data-aos="fade-up" /></div>
		</div>
	);
};

export default NewsHeader;
