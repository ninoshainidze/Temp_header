import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Signin from "./pages/Signin";
import JsonData from "./data.json";
import { useState } from "react";

function App() {
  const [searchData, SetSearch] = useState('');
  return (
    <>
      <Router>
        <header>
          <button>
            <GiHamburgerMenu />
            <p>menu</p>
          </button>
          <div className="logo">
            <Link to="/">
              <h2>Ticketsbox</h2>
            </Link>
          </div>
          <div className="right_text">
            <div className="search">
              <form action="">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={event => {
                    SetSearch(event.target.value);
                  }}
                />
                <BiSearchAlt2 />
              </form>
            </div>
            <div className="signin_button">
              <Link to="/signin" className="btn medium">
                <span>ავტორიზაცია</span>
              </Link>
            </div>
            <div className="language_switcher">
              <p>en</p>
            </div>
          </div>
        </header>
        <div>
          {JsonData.filter((val) => {
            if (searchData == "") {
              return val
            } else if (val.username.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (
              <div className="user" key={key}>
                <p>{val.username}</p>
              </div>
            );
          })}
        </div>
        <Route path="/signin" exact={true} component={Signin} />
      </Router>
    </>
  );
}

export default App;
