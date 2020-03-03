import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as Yup from 'yup';

const Login = () => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const Main = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
  `
  
  return (
      <Main>
    
    <form className = "forms" onSubmit={handleSubmit(onSubmit)}>
      <h1>Log In!</h1>
      <input className = "each" type="text" placeholder="username" name="username" ref={register({required: true, maxLength: 80})} />
      <input className = "each" type="password" placeholder="password" name="password" ref={register({required: true, maxLength: 100})} />
     

     

      <input type="submit" />
    </form>
    </Main>
  );
}

export default Login;


// From Arash Haji-Hassanzadeh to Everyone:  12:17 PM
// login = e => {
//     e.preventDefault();
    
//     axiosWithAuth()
//       .post(
//         "/auth/register”,
//         this.state.credentials
//       )
//       .then(res => {
//           console.log(res)
//         localStorage.setItem("token", res.data.token);
//          this.props.history.push("/plants");

//          let welcomeMessage = res.data.message;
//          axiosWithAuth().get("/users")
//           .then(res => {
//            let user = res.data.filter(user=>welcomeMessage.includes(user.username))
//            console.log('login props', this.props);
//            this.props.history.push(`/users/${user[0].id}/plants`)
//          })
//           .catch(err => console.log(err))
//       })
//       .catch(err => console.log(err));
//   };
