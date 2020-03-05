import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import anotherplant from "../img/logo-earth.svg";
import * as Yup from "yup";
const Main = styled.div`
  background: #608eff;
  font-family: "Montserrat";
  height: 100vh;
`;
const Header1 = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  align-items: center;
  margin-bottom: 3rem;
`;
const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [userId, setUserId] = useState();
  const { register, handleSubmit, errors } = useForm();
  //   const onSubmit = data => console.log(data);
  //   console.log(errors);
  const handleUserName = e => {
    setUser({ ...user, username: e.target.value });
  };
  const handlePassword = e => {
    setUser({ ...user, password: e.target.value });
  };
  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  }));
  const classes = useStyles();
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
      .post("api/auth/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        props.history.push(`/users/${res.data.id}/plants`);
        console.log("success");
      })
      .catch(err => console.log(err));
  };
  return (
    <Main>
      <form
        className="forms"
        onSubmit={login}
        // onSubmit={handleSubmit(login)}
      >
        <Header1 className="header">
          <img className="newplant" src={anotherplant} />
          <h1 className="title">Login!</h1>
        </Header1>
        <input
          className="each"
          type="text"
          placeholder="username"
          name="username"
          onChange={handleUserName}
          ref={register({ required: true, maxLength: 10 })}
        />
        <input
          className="each"
          type="password"
          placeholder="password"
          name="password"
          onChange={handlePassword}
          ref={register({ required: true, maxLength: 100 })}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          type="submit"
          onClick={login}
        >
          {" "}
          Log In{" "}
        </Button>
      </form>
    </Main>
  );
};
export default Login;
