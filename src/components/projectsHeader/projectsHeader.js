import scss from "./projectsHeader.module.scss";
import img1 from "../../media/logo_white.png";
const ProjectsHeader = ({ bgImage, title }) => {
	return (
		<div
			className={scss.projectsHeader}
			style={{ backgroundImage: `url("${bgImage}")` }}
		>
			<h1>{title}</h1>
			<img src={img1} alt={img1} className={scss.projectsHeaderImg} />
			<img src={img1} alt={img1} className={scss.projectsHeaderImg2} />
		</div>
	);
};

export default ProjectsHeader;
