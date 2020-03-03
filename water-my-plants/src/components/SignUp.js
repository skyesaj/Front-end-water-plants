import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axiosWithAuth from '../utils/axiosWithAuth';

const Main1 = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
  `

  const Signup = props => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
//   console.log(errors);
  const [user, newUser] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: ''
  });

  

  const handleUserName = e => {
    newUser({...user, username: e.target.value});
}


const handleEmail = e => {
    newUser({...user, email: e.target.value});
}


const handleNumber = e => {
    newUser({...user, phone_number: e.target.value});
}

const handlePassword = e => {
    newUser({...user, password: e.target.value})
}


const signUp = e => {
    e.preventDefault();
    
    axiosWithAuth()
      .post('/auth/register', user)
      .then(res => {
          console.log(res)
        localStorage.setItem("token", res.data.token);
         props.history.push("/plants");

         let welcomeMessage = res.data.message;
         axiosWithAuth().get("/users")
          .then(res => {
           let user = res.data.filter(user=>welcomeMessage.includes(user.username))
           console.log('login props', props);
           props.history.push(`/users/${user[0].id}/plants`)
         })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  };

  
  return (
      
    <Main1>
    <form className = "forms" onSubmit={signUp}>
      <h1 className = "title">Create an Account!</h1>
      <input className = "each" type="text" placeholder="username" name="username" onChange={handleUserName} 
      ref={register({required: true, maxLength: 80})} 
      />
      <input className = "each" type="password" placeholder="password" name="password" onChange={handlePassword} 
      ref={register({required: true, maxLength: 100})} 
      />
      <input className = "each" type="email" placeholder="Email" name="Email" onChange={handleEmail} 
      ref={register({required: true, pattern: /^\S+@\S+$/i})} 
      />
      <input className = "each" type="tel" placeholder="Mobile number" name="phone_number" onChange={handleNumber} 
      ref={register({required: true, minLength: 6, maxLength: 12})} 
      />
      

     

      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
    </Main1>
  );
}

export default Signup;
