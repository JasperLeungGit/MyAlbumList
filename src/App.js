import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import List from "./Components/List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Components/Todos";
import AlbumSearch from "./Components/AlbumSearch";
import Albums from "./Components/Albums";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/editlist" component={Todos} />
      <Route path="/list/:username" component={List} />
      <Route path="/register" component={Register} />
      <Route path="/searchAlbums" component={AlbumSearch} />
      <Route path="/albums" component={Albums} />
    </Router>
  );
}

export default App;
