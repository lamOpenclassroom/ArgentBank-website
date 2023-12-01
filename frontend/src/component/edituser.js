import "../style/style.css"
import { useSelector,useDispatch } from "react-redux" 
import { myActionEdit } from "../store"
import { useState } from "react";

function Edituser() {
    const dispatch = useDispatch();
    const firstname = useSelector((state) => state.firstname);
    const lastname = useSelector((state) => state.lastname);
    const username = useSelector((state) => state.username);

    const [newName, setnewName] = useState("")
    const token = useSelector((state) => state.token);


    //affiche le state showEdit
    useSelector((state) => state.showEdit)

    function modaleEdit() {
        //lancer l'action
        dispatch(myActionEdit());
    }

    const validName = async (event) => {
        event.preventDefault();

           await fetch('http://localhost:3001/api/v1/user/profile', {
           method: 'PUT',
               headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
           },
           body: JSON.stringify({userName:newName}), // Modèle de valeur pour le PUT et convertir newName en JSON.
           }) 
                .then(response => {
                    console.log(response)
                    if (response.ok) {
                        dispatch({
                            type: 'DEFIN_USERNAME',
                            payload: {
                            username: newName,
                            firstname: firstname,
                            lastname: lastname,
                            },
                        })
                    } else {
                            console.error('Erreur lors de l envoi du nouveau nom d utilisateur')
                    }
                    }
                )
                .catch(error => {console.log(error)}); 
                setnewName('');
    };
    
    return (
        <div id="style-text">
          
            <h1>Edit user info</h1>
            <form className="form" >

                <div>
                    <label>User name :</label>
                    <input type="text" placeholder={username} value={newName} className="input-edit" onChange={(event)=>setnewName(event.target.value)}  required/>
                </div>

                <div>
                    <label>First Name :</label>
                    <input type="text" value={firstname} className="input-edit" disabled/>
                </div>
                
                <div>
                    <label>Last Name :</label>
                    <input type="text" value={lastname} className="input-edit" disabled/>
                </div>

                <div className="buttons">
                    <button  onClick={validName} className='transaction-button button buttons-edit'>Save</button>
                    <button  onClick={modaleEdit} className='transaction-button button buttons-edit'>Cancel</button>
                </div>
                

            </form> 
            
        </div>
    )
}

export default Edituser