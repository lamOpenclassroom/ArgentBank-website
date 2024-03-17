import Headeruser from "../component/header/headeruser"
import Mainuser from "../component/main/main-user/mainuser"
import Footer from "../component/footer/footer"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function User() {
    const navigate = useNavigate();
    const {token} = useSelector((state) => state)
    useEffect(() => {
        if (!token) {
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } 
    }, [token, navigate]);
    return (
        <div>
            <body>
                <Headeruser />
                <Mainuser />
                <Footer />
            </body>
        </div> 
    )
}
export default User