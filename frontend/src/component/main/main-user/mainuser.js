import { useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { myActionEdit } from '../../../store';
import {mainuser} from "../../../Data"
import "./mainuser.css"
import Edituser from "../../edit-user/edituser";
import Account from "../../main/main-user/account";
// import Mainsignin from "../main-signin/mainsignin";

function Mainuser() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token); // Récupération du token ds Redux
    const firstname = useSelector((state) => state.firstname);
    const lastname = useSelector((state) => state.lastname);
    const showEdit = useSelector((state) => state.showEdit);

    console.log(showEdit)

    useEffect(() => {
        if (token) {
            const getData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);
                        //Lancer l'action
                        dispatch({
                            type: 'DEFIN_USERNAME',
                            payload: {
                                username: data.body.userName,
                                firstname: data.body.firstName,
                                lastname: data.body.lastName,
                            },
                        });
                    } else {
                        console.log("Erreur lors de la récupération du profil de l'utilisateur");
                    }
                } catch (error) {
                    console.log("Erreur lors de la récupération du profil de l'utilisateur");
                }
            };
        
            getData();
        }
    }, [dispatch, token]);
    
    function modaleEdit() {
        //Lancer l'action
        dispatch(myActionEdit())
        console.log(showEdit)
    }

    return (
        (!token ? <p>loading...</p> :
        <main class="main bg-dark">
            {showEdit ?
                <div class="header">
                    <h1>Welcome back<br />{firstname} {lastname} !</h1>
                    <button onClick={modaleEdit} class="edit-button">Edit Name</button>
                </div>
                :
                <div><Edituser /></div>
            }

            <h2 class="sr-only">Accounts</h2>
            {mainuser.map((item) => (
                <Account id={item.id} accountTitle={item.accountTitle} accountAmount={item.accountAmount} description={item.description} buttonTransaction={item.buttonTransaction} />
            ))}
        </main>
        )
    )
}

export default Mainuser