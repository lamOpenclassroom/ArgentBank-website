import { Link } from "react-router-dom";
import "./error.css";

function Error() {

    return (
        <div className="bloc-message">
            <Link id="message-retour" to="/">Retour à l'acceuil</Link>
            <div >
                <h1 className="message-title">Page not found</h1>
                <p className="message-title">404</p>
            </div>
        </div>
    )
}

export default Error;