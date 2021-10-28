import logo from "../../img/bienvenido.png";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./landingPage.css"
function LandingPage() {
    return(
    <div>
        
        <p class="centrado">
          <img className="i" width="500" height="70" src={logo} ></img>
          </p>
          <Spinner />
          <div  className="content-all">
          <Link to="/home">
          <button   className="button">Ir al Home</button>
          </Link>
          </div>

    </div>
    )
  }
   export default (LandingPage);