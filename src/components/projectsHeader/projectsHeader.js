import scss from "./projectsHeader.module.scss";
import img1 from "../../media/logo_white.png";
const ProjectsHeader = ({ bgImage, title, logo }) => {
	return (
		<div
			className={scss.projectsHeader}
			style={{ backgroundImage: `url("${bgImage}")` }}
		>
			<h1 data-aos="zoom-in-up">{title ? title : ""}</h1>
			<img
				data-aos="zoom-in-up"
				className={scss.projectsHeaderLogo}
				src={logo}
				alt={logo}
			/>
			<img
				src={img1}
				alt={img1}
				className={scss.projectsHeaderImg}
				data-aos="fade-up"
			/>
			<div className={scss.projectsHeaderImg2}>
				<img src={img1} alt={img1} data-aos="fade-up" />
			</div>
		</div>
	);
};

export default ProjectsHeader;
