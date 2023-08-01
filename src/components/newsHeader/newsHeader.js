import scss from "./newsHeader.module.scss";
import img1 from "../../media/logo_white.png";
const NewsHeader = ({ bgImage, title }) => {
	return (
		<div
			className={scss.newsHeader}
			style={{ backgroundImage: `url("${bgImage}")` }}
		>
			<h1> НОВОСТИ</h1>
			<img src={img1} alt={img1} className={scss.newsHeaderImg} />
			<img src={img1} alt={img1} className={scss.newsHeaderImg2} />
		</div>
	);
};

export default NewsHeader;
