import Header from "../component/header"
import Mainsignin from "../component/mainsignin"
import Footer from "../component/footer"
import "../style/style.css"

function Signin() {
    return (
        <div className="bloc-signin">
            <Header/>
            <Mainsignin />
            <Footer/>
        </div>
    )
}

export default Signin