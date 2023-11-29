import { useDispatch, useSelector} from "react-redux"
import { useEffect} from 'react';
import Edituser from "./edituser";
import { myActionEdit } from '../store'

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
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                <p class="account-amount">$2,082.79</p>
                <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                <p class="account-amount">$10,928.42</p>
                <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
                <p class="account-amount">$184.30</p>
                <p class="account-amount-description">Current Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default Mainuser