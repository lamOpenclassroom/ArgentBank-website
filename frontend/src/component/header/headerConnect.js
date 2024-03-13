import { Link } from "react-router-dom";
import "./header.css";

function HeaderConnect() {
    return (
        <div>
            <Link  class="main-nav-item" to="/login">Sign In</Link>
        </div>
    )
}
export default HeaderConnect;