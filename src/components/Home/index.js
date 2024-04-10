import React, { useEffect, useState } from "react";
import "./index.css";
import MovieCardItem from "../MovieCardItem";
import {
  Api_key,
  FAILED,
  INITIAL,
  LOADING,
  SUCCESS,
} from "../../ReduxStore/Constants";
import { useDispatch, useSelector } from "react-redux";
import MoviesPagination from "../MoviesPagination";
import FailureView from "../../ReUseableComponents/FailureView";
import InProgressView from "../../ReUseableComponents/InProgressView";
import { pageFunction } from "../../ReduxStore/Action";

let totalPages;
const Home = () => {
  const dispatch = useDispatch();
  const movieNameObj = useSelector((state) => state);
  // console.log(movieNameObj);

  const [moviesList, setMoviesList] = useState([]);
  const [apiStatus, setApiStatus] = useState(INITIAL);
  let path = window.location.pathname;
  const getMoviesList = async (args) => {
    const { searchInput, pageNo } = args;
    setApiStatus(LOADING);
    try {
      console.log("Home Page", window.location.pathname);

      const response = await fetch(
        searchInput
          ? `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${searchInput}&page=${pageNo}`
          : `https://api.themoviedb.org/3/movie/${path}?api_key=${Api_key}&language=en-US&page=${pageNo}`
      );
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        totalPages = data.total_pages;
        setApiStatus(SUCCESS);
        setMoviesList(data.results);
      } else {
        console.log("Api Failed");
        setApiStatus(FAILED);
      }
    } catch (error) {
      console.log(error);
      setApiStatus(FAILED);
    }
  };

  useEffect(() => {
    getMoviesList({
      searchInput: movieNameObj.searchInput,
      pageNo: movieNameObj.pageNo,
    });
    if (path === "/") window.location.pathname = "/popular";
  }, [movieNameObj.searchInput, path]);

  const handlePageNumber = (pageNumber) => {
    dispatch(pageFunction(pageNumber));
    getMoviesList({
      searchInput: movieNameObj.searchInput,
      pageNo: pageNumber,
    });
  };

  // console.log(moviesList);
  // console.log("totalPages", totalPages);

  const renderSuccessView = () => (
    <>
      {moviesList.length !== 0 ? (
        <>
          <ul className="list-unstyled movie_list_container">
            {moviesList.map((eachItem) => (
              <MovieCardItem key={eachItem.id} EachMovieItem={eachItem} />
            ))}
          </ul>
          {moviesList.length > 0 && (
            <MoviesPagination
              totalPages={totalPages}
              handlePageNumber={handlePageNumber}
              currentPageNumber={movieNameObj.pageNo}
            />
          )}
        </>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <h1 className="text-secondary h3">No Results Found!</h1>
        </div>
      )}
    </>
  );

  const decisionMaking = () => {
    switch (apiStatus) {
      case "success":
        return renderSuccessView();
      case "failed":
        return <FailureView callAPIAgain={getMoviesList} />;
      case "loading":
        return <InProgressView />;
      default:
        return null;
    }
  };
  return <div className="">{decisionMaking()}</div>;
};

export default Home;
