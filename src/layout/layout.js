import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/navbar/nav";
import i18next from "i18next";
import Footer from "../components/footer/footer";
import MobileNav from "../components/mobileNav";
import { useState, useEffect } from "react";
import video from "../media/zikkirAnimation2.mp4";

const Layout = () => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const [active, setActive] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setActive(false);
		}, 5000);
	}, []);
	return (
		<Suspense fallback="loading">
			<div className="app-wrap">
				{active ? (
					<>
						<video
							src={video}
							autoPlay
							muted
							playsInline
							style={{
								width: "100%",
								height: "100vh",
								position: "fixed",
								inset: 0,
								background: "white",
								zIndex: 100,
							}}
						></video>
					</>
				) : (
					// <Navbar />
					<>
						<Nav onClick={(e) => handleClick(e)} />
						<div className="mobileNav">
							<MobileNav />
						</div>
					</>
				)}
				<Outlet />
				<Footer />
			</div>
		</Suspense>
	);
};

export default Layout;
