import "./mainsignin.css"
import { useSelector } from "react-redux" 
import { useDispatch } from "react-redux"
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { myAction } from "../../../store";
import { rememberCheck } from '../../../store';

function Mainsignin() {
    //Remember
    const checkIt = useSelector((state) => state.checkIt)
    
    // States
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    
    // Définir les états pour stocker les données du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //hook navigation
    const navigate = useNavigate()

    //change l'état de mon state global checkIt
    function remember(){
        dispatch(rememberCheck())  
    }

    // Fonction pour gérer la soumission du formulaire
    const formSubmit = (event) => {
        event.preventDefault();
         
        // Construire l'objet de données à envoyer
        const data = {
            email: email,
            password: password
        };
                
        //Appel de la fonction fetch
        fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) //convertir les datas récupérés en format json
        })
            .then(response => response.json())  
            .then(data => {
                console.log(data);
                if (data.status !== 200 || email === "") { // Gestion des erreurs + sécurisé champs vide
                    document.getElementById("erreur").innerHTML = ("Erreur dans l’identifiant ou le mot de passe");
                    document.getElementById("connexion-valid").innerHTML = "";
                }
                else {
                    document.getElementById("connexion-valid").innerHTML = ("Vous êtes bien connecté");
                    document.getElementById("erreur").innerHTML = "";
                    //Lancer l'action
                    dispatch(
                        myAction(data));
                }   
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        if (token) {
            setTimeout(() => {
                navigate("/profil");
            }, 1000);
        } 
    }, [token, navigate]);

    (checkIt !== false) ? localStorage.removeItem("mytoken") : localStorage.setItem("mytoken", token)
    //au moment ou je rafraichis la page, faire disparaitre les données de l'utilisateur.
    
        return (
        
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form id="form" onSubmit={formSubmit}>
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="email" id="username" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div class="input-remember">
                            <input type="checkbox" value={checkIt} id="remember-me" onClick={remember} />
                            <label for="remember-me">Remember me</label>
                        </div>
                        
                        <button type="submit" class="sign-in-button">Sign In</button>
                    </form>
                    <p id="erreur"></p>
                    <p id="connexion-valid"></p>
                </section>
            </main>
        );
    
}
export default Mainsignin;