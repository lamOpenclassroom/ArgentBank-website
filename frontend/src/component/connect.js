import { Link } from "react-router-dom";
import "../style/header.css";

function Connect() {
    return (
        <div>
            <Link  class="main-nav-item" to="/login">Sign In</Link>
        </div>
    )
}
export default Connect;