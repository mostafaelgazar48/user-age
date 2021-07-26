import Card from "../UI/Card";
import classes from './UsersList.module.css'
const UsersList = (props) => {

   const DeleteHandler =(id)=>{
       props.onDelete(id);
   }
   
    return (
        <Card className={classes.user} >
            <ul>
                {props.users.map((user) =>
                (
                    <li key={user.id}>
                        {user.username}  Has {user.age} Years old
                        <button onClick={() =>DeleteHandler(user.id)}> Delete</button>
                    </li>
                    
                 

                )
                )}

            </ul>

        </Card>

    )
}


export default UsersList;