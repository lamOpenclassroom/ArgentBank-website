import Headeruser from "../component/header/headeruser"
import Mainsignin from "../component/main/main-signin/mainsignin"
import Footer from "../component/footer/footer"

function Signin() {
    return (
        <div className="bloc-signin">
            <Headeruser/>
            <Mainsignin />
            <Footer/>
        </div>
    )
}

export default Signin