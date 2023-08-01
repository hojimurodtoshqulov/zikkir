import "./news.scss";
import NewsHeader from "../../components/newsHeader/newsHeader";
import img1 from "../../media/news.png";
import Map_form from "../../components/map_form/map_form";
import NewsCards from "../../components/newsCards/newsCards";
const News = () => {
	return (
		<main className="news">
			<NewsHeader bgImage={img1} />
			<NewsCards />
			<Map_form />
		</main>
	);
};

export default News;
