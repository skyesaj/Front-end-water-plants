import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';


 const Main = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
  `
  const Login = (props) => {
  const [user, setUser] = useState({
      username: '',
      password: ''
  })
  const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
  console.log(errors);

  const handleUserName = e => {
      setUser({...user, username: e.target.value});
  }

  const handlePassword = e => {
      setUser({...user, password: e.target.value})
  }

//   const login = e => {
//       e.preventDefault();
//       axiosWithAuth()
//       .post('/auth/login', user)
//       .then(res => {
//           console.log(res)
//           localStorage.setItem('token', res.data.token);
//           props.history.push('/plants')
//       })
//       .catch(err => console.log(err))
//   };

  const login = e => {
    e.preventDefault();
    
    axiosWithAuth()
      .post('/auth/login', user)
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
      <Main>
    
    <form 
    className = "forms"
    onSubmit={login}
    // onSubmit={handleSubmit(login)}
    >
      <h1 className = "title ">Log In!</h1>
      <input className = "each" type="text" placeholder="username" name="username" onChange={handleUserName} 
      ref={register({required: true, maxLength: 10})} 
      />
      <input className = "each" type="password" placeholder="password" name="password" onChange={handlePassword} 
      ref={register({required: true, maxLength: 100})} 
      />
     

     
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
