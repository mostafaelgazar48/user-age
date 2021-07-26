import React from 'react';
import { useState } from 'react';
 import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
const [ usersList,setUsersList] = useState([]);
  const addHandler = (username,age)=>{
    setUsersList((prev) =>{
      return [...prev,{username,age,id:Math.random().toString()}];
    })

  }

  const deleteHandler = (id) =>{
   const filtered = usersList.filter(item => item.id !==id);
   setUsersList(filtered)
  }
  return (
    <div>
        <AddUser onAdd={addHandler} />

        <UsersList users ={usersList} onDelete={deleteHandler}/>
    </div>
  );
}

export default App;
