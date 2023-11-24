import "../style/style.css"
//import { useSelector } from "react-redux" GARDE Tous ces hooks pour la connexion dans mainsignin
//import { useDispatch } from "react-redux"
//import { connexionUser } from "../store"
import { useState } from 'react';


function Mainsignin() {
    // Définir les états pour stocker les données du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Fonction pour gérer la soumission du formulaire
    
    const formSubmit = async () => {
        // Construire l'objet de données à envoyer
        const data = {
            email: email,
            password: password,
        };
         //convertir les datas récupérés en format json
        let dataFormJson = JSON.stringify(data);
        //Appel de la fonction fetch
        fetch("http://locahost:3001/user/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: dataFormJson
        }).then((resp) => {
            if (resp.ok === false) {
                document.getElementById("erreur").innerHTML = ("Erreur dans l’identifiant ou le mot de passe");
            } else {
                document.getElementById("connexion-valid").innerHTML = ("Vous êtes bien connecté");
                document.getElementById("erreur").innerHTML = "";
                return resp.json();
            }
        }).catch((error)=>{
            console.log(error)
        })
       
        }
        return (
        
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form action="./signout" method="POST" id="form">
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        
                          
                        <input type="submit" class="sign-in-button" value="Sign In" onClick={formSubmit()}/>
                    
                    </form>
                    <p id="erreur"></p>
                    <p id="connexion-valid"></p>
                </section>
            
             
            </main>
        );
    
}
export default Mainsignin;