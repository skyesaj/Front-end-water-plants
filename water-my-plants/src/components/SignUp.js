import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Signup = () => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const Main1 = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
  `
  
  return (
      
    <Main1>
    <form className = "forms" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create an Account!</h1>
      <input className = "each" type="text" placeholder="username" name="username" ref={register({required: true, maxLength: 80})} />
      <input className = "each" type="password" placeholder="password" name="password" ref={register({required: true, maxLength: 100})} />
      <input className = "each" type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input className = "each" type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
      

     

      <input type="submit" />
    </form>
    </Main1>
  );
}

export default Signup;
