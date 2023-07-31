import * as React from "react";
import Status from "./Status";

/**
 * ScrollWrapper directs the user to scroll the page to reveal it's children.
 * Use this on Modules that have scroll and/or observer triggers.
 */
const ScrollWrapper = ({ children, style, inView, ...props }) => {
	return (
		<div {...props} className="scrolWrapper">
			<Status inView={inView} />
			<section>
				<h1>⬇ Scroll Down ⬇</h1>
			</section>
			{children}
			<section>
				<h1>⬆︎ Scroll up ⬆︎</h1>
			</section>
		</div>
	);
};

export default ScrollWrapper;
