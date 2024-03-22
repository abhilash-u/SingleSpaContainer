import "../src/NavBar.css"
import ReactComponent from  "../icons/hamburger_1.svg";
import { useState } from "react";
export function NavBar(props) {

  const [openApplist, setOpenApplist] = useState(false);
  
  const toggleHamburger = (event) => {
    
    setOpenApplist(!openApplist);
  }
  

  return (<>
    {<div> 
      <div className="hamBurger">
        <img src={ReactComponent} alt="test" onClick={toggleHamburger}  />
      </div>
      <ul className={ openApplist ? "appListShow":"appList"}>
      <li><a href="childApp">Single SPA React</a></li>
      <li><a href="angularApp">Module Federated Angular</a></li>
      </ul>
    </div>
     }
    </>)
  
  
}
  
