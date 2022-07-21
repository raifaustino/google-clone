import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      {/* <h2>this is home page</h2> */}

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about"> about</Link>
          <Link to="/store"> store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail"> gmail</Link>
          <Link to="/images"> images</Link>
          <AppsIcon />
          <PersonIcon />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="imagem"
        />
      </div>
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
}

export default Home;
