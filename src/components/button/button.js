import "./button.scss";
import { Link } from "react-router-dom";
export default function Button({
	btnTitle,
	btnLink,
	bgColor,
	color,
	btnStyle,
	...otherProps
}) {
	return (
		<button
			className={btnStyle === "emptyBtn" ? "empty " : "button"}
			type="submit"
			{...otherProps}
			style={{ background: { bgColor }, color: { color } }}
		>
			<Link to={btnLink}>{btnTitle}</Link>
		</button>
	);
}
