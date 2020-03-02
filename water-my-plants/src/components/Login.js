import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const Login = () => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
      
    
    <form className = "forms" onSubmit={handleSubmit(onSubmit)}>
      <h1>Log In!</h1>
      <input className = "each" type="text" placeholder="username" name="username" ref={register({required: true, maxLength: 80})} />
      <input className = "each" type="text" placeholder="password" name="password" ref={register({required: true, maxLength: 100})} />
     

     

      <input type="submit" />
    </form>
  );
}

export default Login;
