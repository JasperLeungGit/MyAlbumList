import React, { useState, useEffect } from "react";
import ListService from "../Services/ListService";

const UserSearch = (props) => {
  const [users, setUsers] = useState([]);
  const [shownUsers, setShownUsers] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    ListService.getUsers().then((data) => {
      setUsers(data);
      setShownUsers(data);
    });
  }, []);

  const search = (user) => {
    return (
      user.toUpperCase() ===
      document.getElementById("searchbar").value.toUpperCase()
    );
  };

  const clear = (e) => {
    e.preventDefault();
    setShownUsers(users);
    setNotFound(false);
  };

  const findUser = (e) => {
    e.preventDefault();
    const found = users.find(search);
    if (found) {
      setShownUsers([found]);
      setNotFound(false);
    } else setNotFound(true);
  };

  if (!notFound) {
    return (
      <div>
        <br></br>
        <form onSubmit={findUser}>
          <label htmlFor="search" className="sr-only">
            Search:{" "}
          </label>
          <input
            id="searchbar"
            type="text"
            name="search"
            className="form-control"
            placeholder="Enter username"
            style={{ width: "42vw", float: "left", marginRight: "1vw" }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "1vw" }}
          >
            Search
          </button>
          <button type="submit" className="btn btn-primary" onClick={clear}>
            Reset Search Results
          </button>
        </form>
        <br></br>
        <h3>Find Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>
                {" "}
                <p>Users</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {shownUsers.map((user) => {
              return (
                <tr key={user}>
                  <td>
                    <a
                      href={"/list/" + user}
                      title="Click to visit this user's list"
                    >
                      {user}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else
    return (
      <div>
        <br></br>
        <form onSubmit={findUser}>
          <label htmlFor="search" className="sr-only">
            Search:{" "}
          </label>
          <input
            id="searchbar"
            type="text"
            name="search"
            className="form-control"
            placeholder="Enter username"
            style={{ width: "42vw", float: "left", marginRight: "1vw" }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "1vw" }}
          >
            Search
          </button>
          <button type="submit" className="btn btn-primary" onClick={clear}>
            Reset Search Results
          </button>
        </form>
        <br></br>
        <h1>No users found</h1>
      </div>
    );
};

export default UserSearch;
