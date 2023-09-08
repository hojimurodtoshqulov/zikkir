import React from "react";
import Submit from "../submitApp/submit";
import "./modal.scss";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import NewsService from "../news/newsService";
const Modal = ({ open, onClose, theme, data }) => {
	// const [openModal, setOpenModal] = useState(true);
	console.log(open, ">>>open");
	//   if (!open) return null;
	const log = () => {
		// console.log("bla");
	};
	return (
		// <div className={"overlay active"}>
		<div className={open ? "overlay active " : "overlay"}>
			<div className="modalContainer">
				{/* <Submit onClose={onClose} /> */}
				{theme === "submit" ? <Submit onClose={onClose} /> : <NewsService data={data} />}
				<p onClick={onClose} className="modalCloser">
					<VscChromeClose />
				</p>
			</div>
			<div onClick={onClose} className="modalBg"></div>
		</div>
	);
};
export default Modal;
