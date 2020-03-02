import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const Signup = () => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
      
    
    <form className = "forms" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create an Account!</h1>
      <input className = "each" type="text" placeholder="username" name="username" ref={register({required: true, maxLength: 80})} />
      <input className = "each" type="text" placeholder="password" name="password" ref={register({required: true, maxLength: 100})} />
      <input className = "each" type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input className = "each" type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
      

     

      <input type="submit" />
    </form>
  );
}

export default Signup;
