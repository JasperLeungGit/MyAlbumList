import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
      window.location.href = "/";
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <div className="navbar-brand">MyAlbumList</div>
        </Link>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-item nav-link">Login</li>
        </Link>
        <Link to="/register">
          <li className="nav-item nav-link">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    const username = user.username;
    return (
      <>
        <Link to={"/home/" + username}>
          <div className="navbar-brand">MyAlbumList</div>
        </Link>
        <Link to={"/home/" + username}>
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to={"/editlist/" + username}>
          <li className="nav-item nav-link">Edit my List </li>
        </Link>
        <Link to={"/list/" + username}>
          <li className="nav-item nav-link">Share my list</li>
        </Link>
        <Link to={"/searchalbums/"}>
          <li className="nav-item nav-link">Search For Albums</li>
        </Link>
        {user.role === "admin" ? (
          <Link to={"/admin/" + username}>
            <li className="nav-item nav-link">Admin</li>
          </Link>
        ) : null}
        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandler}
        >
          Logout
        </button>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
