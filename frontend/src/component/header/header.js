import Logobank from "../../img/argentBankLogo.png"
import { Link } from 'react-router-dom'
import "./header.css"
import { useSelector, useDispatch } from "react-redux";
import HeaderConnect from "./headerConnect";

function Header() {
  const token = useSelector((state) => state.token);
  const username = useSelector((state) => state.username); 
  const dispatch = useDispatch();

  const userLogout = () => { //modifier le token à chaque déconnexion
    localStorage.removeItem("mytoken");
    dispatch({ // Enregistrement du token dans le store
      type: 'LOGOUT',
    });
  };

  return (
      
      <div>
        <header >
          <nav class="main-nav">
            <Link  class="main-nav-item" to="/">
              <img
                class="main-nav-logo-image"
                src={Logobank}
                alt="Argent Bank Logo"
              />
              <h1 class="sr-only">Argent Bank</h1>
            </Link>
            {token ?
              <div  class="main-nav"> 
                <a class="main-nav-item" href="./user.html">
                  <i class="fa fa-user-circle"></i>
                  {username}
                </a>
                <Link class="main-nav-item" to="/" onClick={userLogout}>
                  <a class="main-nav-item" href="./index.html">
                  <i class="fa fa-sign-out"></i>
                    Sign Out
                  </a>
                </Link>
                <HeaderConnect/>
              </div>
                :
                <HeaderConnect/>
              }
          </nav>
        </header>
      </div>
    );
}
  
export default Header;