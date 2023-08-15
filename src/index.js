import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback="loading">
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);

