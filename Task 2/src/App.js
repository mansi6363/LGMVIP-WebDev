import React, { useState } from "react";
import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);

  const loadUsers = async() => {

    document.querySelector('.loading').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.loading').style.display = 'none';
    }, 2000);

    const response = await fetch
    ("https://reqres.in/api/users?page=1")
    const jsonResponse = await response.json();

    const userData = jsonResponse.data.map(user => ({
      id : user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      avatar : user.avatar
    }))
    setUsers(userData)
  }
  
  
  return (

    <div className= "App">

      <nav className = "navbar">
        <img src = "https://letsgrowmore.in/wp-content/uploads/2021/05/growmore-removebg-preview.png" alt = "logo"/>
        <div className= "nav_content">
          <p>HOME</p>
          <p id="currentPage">TEAM</p>
          <p>ABOUT</p>
          <p>SIGN UP</p>
          <p>LOGIN</p>
        </div>    
      </nav>

      <h1>TEAM MEMBER </h1>
      {!users.length ? <button onClick = {loadUsers} >GET DATA</button> : null}

      <div className = "loading">
          <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt=""/>
      </div>
      

      <main className="App_team">
        {users.map(({id, firstName, lastName, avatar}) => (
          <div>
          <img src = {avatar} alt = "avatar" className="user_image"/>
          <p key={id} className ="username">{firstName} {lastName}</p>
          </div>
        ))}     
       </main>
    </div>  
  );  
};

export default App;