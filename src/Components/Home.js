import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <h1
        style={{
          postion: "absolute",
          fontFamily: "Lato",
          fontSize: "9vh",
          width: "50vw",
        }}
      >
        MyAlbumList
      </h1>
      <hr></hr>
      <br></br>
      <h1
        style={{
          postion: "absolute",
          fontFamily: "Lato",
          fontSize: "4vh",
          width: "50vw",
        }}
      >
        Create your own personalized list of albums.
      </h1>
      <br></br>
      <br></br>
      <img
        src="https://i.imgur.com/vTg0wbp.png"
        style={{
          maxHeight: "50vh",
          maxWidth: "20vw",
          width: "auto",
          height: "auto",
          float: "left",
        }}
      ></img>

      <img
        src="https://i.imgur.com/9AsCSH9.png"
        style={{
          maxHeight: "50vh",
          maxWidth: "20vw",
          width: "auto",
          height: "auto",
          marginLeft: "5vw",
        }}
      ></img>
      <img
        src="https://i.imgur.com/hqO7msS.png"
        style={{
          maxHeight: "30vh",
          maxWidth: "20vw",
          width: "auto",
          height: "auto",
          float: "left",
          marginLeft: "5vw",
          marginBottom: "5vh",
        }}
      ></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h1
        style={{
          postion: "absolute",
          fontFamily: "Lato",
          fontSize: "2vh",
          width: "50vw",
        }}
      >
        Login now or register an account.
      </h1>
      <br></br>
      <a
        href="/login"
        class="btn btn-outline-primary"
        role="button"
        aria-pressed="true"
        style={{ float: "left", marginRight: "1vw" }}
      >
        Login
      </a>
      <a
        href="/register"
        class="btn btn-outline-success"
        role="button"
        aria-pressed="true"
        style={{ float: "left", marginBottom: "10vh" }}
      >
        Register
      </a>
      <br></br>
      <h1
        style={{
          postion: "absolute",
          fontFamily: "Lato",
          fontSize: "2vh",
          opacity: "60%",
          width: "50vw",
          marginTop: "20.1vh",
          overflowY: "hidden",
        }}
      >
        created by Jasper Leung (view my other work at jasper-leung.web.app)
      </h1>
    </div>
  );
};

export default Home;
