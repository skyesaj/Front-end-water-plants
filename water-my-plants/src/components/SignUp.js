import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axiosWithAuth from '../utils/axiosWithAuth';
import plant from '../img/transparentplant.png';

const Main1 = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
`
const Header1 = styled.div `
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
align-items: center;
margin-bottom: 3rem;
`


const Signup = props => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
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
          console.log('register response: ', res)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('id', JSON.stringify(res.data.user_id))
        // setUserId(res.data.user_id)
         setTimeout(() => props.history.push('/login'
            //  `/users/${res.data.user_id}/plants`
             ), 2000);

         let welcomeMessage = res.data.message;
         console.log('welcome message', welcomeMessage)
        //  axiosWithAuth()
        // .get("/users")
        //   .then(res => {
        //    let user = res.data.filter(user=>welcomeMessage.includes(user.username))
        //    console.log('login props', props);
        //    props.history.push(`/users/${userId}/plants`)
        //  })
        //   .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  };

//     e.preventDefault();
    
//     axiosWithAuth()
//       .post('/auth/register', user)
//       .then(res => {
//           console.log(res)
//         localStorage.setItem("token", res.data.token);
//          props.history.push("/plants");

//          let welcomeMessage = res.data.message;
//          axiosWithAuth().get("/users")
//           .then(res => {
//            let user = res.data.filter(user=>welcomeMessage.includes(user.username))
//            console.log('login props', props);
//            props.history.push(`/users/${user[0].id}/plants`)
//          })
//           .catch(err => console.log(err))
//       })
//       .catch(err => console.log("Wrong user info, error code: ", err));
//   };

  
  return (
      
    <Main1>
    <form className = "forms" onSubmit={signUp}>
      <Header1 className="header">
        <img src={plant}/>
        <h1 className = "title">Create an Account!</h1>
      </Header1>
      
      <input className = "each" type="text" placeholder="username" name="username" onChange={handleUserName} 
      ref={register({required: true, maxLength: 15})} 
      />
      <input className = "each" type="password" placeholder="password" name="password" onChange={handlePassword} 
      ref={register({required: true, maxLength: 15})} 
      />
      <input className = "each" type="email" placeholder="Email" name="Email" onChange={handleEmail} 
      ref={register({required: true, pattern: /^\S+@\S+$/i})} 
      />
      <input className = "each" type="tel" placeholder="Mobile number" name="phone_number" onChange={handleNumber} 
      ref={register({required: true, minLength: 6, maxLength: 12})} 
      />
      

       
     
     
     
      <Button variant="contained" color="primary" type="submit" onClick={signUp}> Submit </Button>
    </form>
    </Main1>
  );
}

export default Signup;
