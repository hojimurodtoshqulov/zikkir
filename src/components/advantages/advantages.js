import Button from "../button/button";
import scss from "./advantages.module.scss";

const Advantages = ({}) => {
	return (
		<div className={scss.advantages}>
			<div className="container">
				<h2>Преимущества</h2>
				<div className={scss.advantages__elements}>
					<div
						className={scss.advantages__elements_texts}
						data-aos="fade-right"
					>
						<div
							className={scss.line}
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						></div>
						<h3>
							<span>1</span>
							Lorem, ipsum dolor.
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed
							euismod orci dictum faucibus malesuada. Praesent sed eros
							tincidunt, viverra neque auctor, lobortis enim.
						</p>
					</div>
					<div className={scss.advantages__elements_texts} data-aos="fade-left">
						<div
							className={scss.line}
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						></div>
						<h3>
							<span>2</span>
							Lorem, ipsum dolor.
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed
							euismod orci dictum faucibus malesuada. Praesent sed eros
							tincidunt, viverra neque auctor, lobortis enim. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Tenetur ratione veniam
							iste, odio unde expedita nesciunt, fugit alias commodi maiores
							dolor voluptates aspernatur accusamus repellat nemo, dignissimos
							voluptatem quis cumque!
						</p>
						<div className={scss.videoTexts}>
							<iframe
								width="760"
								height="215"
								src="https://www.youtube.com/embed/SaseeK2sFTY"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
							<h3>
								Travelling there
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus dapibus mauris in lectus tempus, eget tincidunt.
								</p>
							</h3>
						</div>
					</div>
					<div
						className={scss.advantages__elements_texts}
						data-aos="fade-right"
					>
						<h3>
							<span>3</span>
							Lorem, ipsum dolor.
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed
							euismod orci dictum faucibus malesuada. Praesent sed eros
							tincidunt, viverra neque auctor, lobortis enim.
						</p>
						<div className={scss.button}>
							<Button
								btnTitle={"learn more"}
								bgColor={"#08A1DD"}
								color={"white"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
