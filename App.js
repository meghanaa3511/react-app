import logo from './logo.svg';
import './App.css';
import {ref , set } from 'firebase/database';
import {useState} from'react';
import{firebaseAuth , firebaseDatabase} from './backend/firebasehandler';
import { async } from '@firebase/util';

import { createUserWithEmailAndPassword} from 'firebase/auth';


function App() {
  const [userInput ,setuserInput] = useState({emailId:"",password:""})


  const handleClick=async()=>{
    try{
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      alert("acount created")
    }catch(err){
      alert(err);
    }
  }

  const handleChange =(event) => {
    const {name , value }=event.target;

    setuserInput({
      ...userInput,
      [name]:value
    })
  }
  return (
    <div className='App'>
      <input placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange}/>
      <input placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>

 <button onClick={handleClick()}>upload</button>
    </div>
   
  );
}

export default App;
