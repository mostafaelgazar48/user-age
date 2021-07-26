import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';


const AddUser= (props) =>{
    const [enteredUserName,setUserName] = useState('');
    const [enteredAge,setAge] = useState('');
    const [error,setError] = useState('');


    const userNameHandler = (e)=>{
        setUserName(e.target.value);
    
    }

    const ageHandler = (e)=>{
        setAge(e.target.value);
    
    }

    


    const SubmitHandler =(e)=>{
        e.preventDefault();
        if(enteredAge.length === 0 || enteredUserName.length === 0){
            setError({
                title:'invalid Inputs',
                message:'Username or Age length Must be Greatere Than 0 '
            })
            return ;
        }
        if(+enteredAge < 1 ){

            setError({
                title:'invalid Inputs',
                message:'Age  Must be Greatere Than 1'
            })
            return ;
        }

     
        props.onAdd (enteredUserName,enteredAge)
        setUserName('');
        setAge('');
    }


    const removePopUp = ()=>{
        setError(null)
    }
    return (

        <div>
           { error && <ErrorModal title={error.title} message ={error.message} onConfirm ={removePopUp} />}
      
        <Card className={classes.input}>
            <form onSubmit={SubmitHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' value={enteredUserName} type='text' onChange={userNameHandler}/>
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' value={enteredAge} onChange={ageHandler} />
                <Button type='submit'> Add User</Button>
            </form>
        </Card>

        </div>
    );
}


export default AddUser;