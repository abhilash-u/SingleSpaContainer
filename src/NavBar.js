import "../src/NavBar.css";
import ReactComponent from "../icons/hamburger_1.svg";
import { Link, BrowserRouter } from "react-router-dom"; // Import Link for client-side routing

import { useState } from "react";
export function NavBar(props) {
  const [openApplist, setOpenApplist] = useState(false);

  const toggleHamburger = (event) => {
    setOpenApplist(!openApplist);
  };

  return (
    <>
      {
        <BrowserRouter>
          <div>
            <div className="hamBurger">
              <img src={ReactComponent} alt="test" onClick={toggleHamburger} />
            </div>
            <ul className={openApplist ? "appListShow" : "appList"}>
              <li>
                <Link to="/childApp">Single SPA React</Link>
              </li>
              <li>
                <Link to="/angularApp">Module Federated Angular</Link>
              </li>
            </ul>
          </div>
        </BrowserRouter>
      }
    </>
  );
}
