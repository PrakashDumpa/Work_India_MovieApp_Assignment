import { Link } from "react-router-dom";
import "./index.css";
import { imageUrl } from "../../ReduxStore/Constants";

const MovieCardItem = ({ EachMovieItem }) => {
  const { title, poster_path, vote_average, id } = EachMovieItem;

  return (
    <li className="text-center card_Container  mb-3">
      <Link to={`/${id}`} className="nav-link text-secondary p-1">
        <img
          className="posterSize"
          src={`${imageUrl}${poster_path}`}
          alt={title}
        />
        <p className="m-0">{title}</p>
        <p className="">Rating: {vote_average.toFixed(1)}</p>
      </Link>
    </li>
  );
};

export default MovieCardItem;
