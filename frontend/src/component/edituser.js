import "../style/style.css"
import { useSelector,useDispatch } from "react-redux" 
import { myActionEdit } from "../store"

function Edituser() {
    const dispatch = useDispatch();
    const firstname = useSelector((state) => state.firstname); 
    const lastname = useSelector((state) => state.lastname); 
    const username = useSelector((state) => state.username);



    //affiche le state showEdit
    useSelector((state) => state.showEdit)

    function modaleEdit() {
        //lancer l'action
        dispatch(myActionEdit());       
    }

    return (
        <div id="style-text">
          
            <h1>Edit user info</h1>
            <form className="form" >

                <div>
                    <label>User name :</label>
                    <input type="text" value={username} className="input-edit" />
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
                    <button  className='transaction-button button buttons-edit'>Save</button>
                    <button onClick={modaleEdit} className='transaction-button button buttons-edit'>Cancel</button>
                </div>
                

            </form> 
            
        </div>
    )
}

export default Edituser