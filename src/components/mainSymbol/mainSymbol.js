import React from "react";
import scss from "./mainSymbol.module.scss";
const MainSymbol = ({ symbolWith,brr }) => {
	return (
		<span
			className={scss.mainSymbol}
			style={{ width: `${symbolWith}px`, height: `${symbolWith}px`, borderRadius: `${brr}px`,}}
		>
			<span className={scss.circle}></span>
		</span>
	);
};

export default MainSymbol;
