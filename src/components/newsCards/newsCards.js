import scss from "./newsCards.module.scss";
import img1 from "../../media/u20.png";
import img2 from "../../media/u11.png";
import img4 from "../../media/news.line.png";

const NewsCards = () => {
	const dataCards = [
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе с собственной набережной и озелененной территорией. Здесь будет все для того, чтобы жизнь стала… ",
		},
	];
	return (
		<div className={scss.newsCards}>
			<div className="container">
				<div className={scss.newsCardsDiv}>
					{dataCards?.map((item, index) => (
						<div className={scss.slide} key={index}>
							<div className={scss.titlesDiv}>
								<p>2023-06-24</p>
								<h5>{item.title}</h5>
							</div>
							<img src={item.img} alt={item.img} className={scss.slideImg} />
							<img src={img4} alt={img4} className={scss.slideImgLine} />
							<p className={scss.slideText}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsCards;
