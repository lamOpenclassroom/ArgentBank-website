import Headeruser from "../component/headeruser"
import Mainsignin from "../component/mainsignin"
import Footer from "../component/footer"

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