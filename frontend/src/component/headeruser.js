import Logobank from "../img/argentBankLogo.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import "../style/header.css"

function Headeruser() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token); // Récupération du token ds Redux
  const username = useSelector((state) => state.username); 
  
  const userLogout = () => { //modifier le token à chaque déconnexion
    dispatch({ // Enregistrement du token dans le store
      type: 'LOGOUT',
    });
  };
  
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
              <a class="main-nav-item" href="./user.html">
                <i class="fa fa-user-circle"></i>
                {username}
              </a>
              <Link class="main-nav-item" to="/" onClick={userLogout}>
                <a class="main-nav-item" href="./index.html">
                <i class="fa fa-sign-out"></i>
                  Sign Out
                </a>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
}
  
export default Headeruser;