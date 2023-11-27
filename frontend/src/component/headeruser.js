import Logobank from "../img/argentBankLogo.png"
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";

function Headeruser() {
  const dispatch = useDispatch();

   useSelector((state) => state.token); // Récupération du token ds Redux

   const userLogout = () => { //modifier le token à chaque déconnexion
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
            <div>
              <a class="main-nav-item" href="./user.html">
                <i class="fa fa-user-circle"></i>
                Tony
              </a>
              <Link class="main-nav-item" to="/" onClick={userLogout}>
                <a class="main-nav-item" href="./index.html">
                <i class="fa fa-sign-out"></i>
                  Sign Out
                </a>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
}
  
export default Headeruser;