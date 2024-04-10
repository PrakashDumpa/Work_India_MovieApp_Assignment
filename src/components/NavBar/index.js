import { v4 as uuidV4 } from "uuid";
import "./index.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pageFunction, searchFunction } from "../../ReduxStore/Action";

const navBarItems = [
  { id: uuidV4(), navItem: "Popular", navPath: "/popular" },
  { id: uuidV4(), navItem: "Top Rated", navPath: "/top_rated" },
  { id: uuidV4(), navItem: "Upcomming", navPath: "/upcoming" },
];
const NavBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeInput = (event) => setSearchInput(event.target.value);

  const onClickSearchButton = (event) => {
    event.preventDefault();
    dispatch(searchFunction(searchInput));
    window.location.pathname !== "/" && navigate("/popular");
  };
  return (
    <div className="w-100 d-flex justify-content-center  bg-dark p-2">
      <div className="nav_container">
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink to="/popular">
            <h1 className="navbar-brand">MovieDB</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {navBarItems.map((eachItem) => (
                <li
                  onClick={() => {
                    setSearchInput("");
                    dispatch(searchFunction(""));
                    dispatch(pageFunction(1));
                  }}
                  key={eachItem.id}
                  className="nav-item nav-link"
                  style={{ cursor: "pointer" }}
                >
                  <NavLink to={eachItem.navPath}>{eachItem.navItem}</NavLink>
                </li>
              ))}
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={onClickSearchButton}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Movie Name"
                onChange={onChangeInput}
                value={searchInput}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
