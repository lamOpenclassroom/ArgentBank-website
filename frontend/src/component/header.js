import Logobank from "../img/argentBankLogo.png"
import { Link } from 'react-router-dom'
import "../style/header.css"

function Header() {
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
              <i class="fa fa-user-circle"></i>
              <Link  class="main-nav-item" to="/login">Sign In</Link>
            </div>
          </nav>
        </header>
      </div>
    );
}
  
export default Header;