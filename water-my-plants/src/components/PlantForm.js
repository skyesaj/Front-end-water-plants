import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import anotherplant from "../img/logo-earth.svg";
import axios from "axios";
const PlantContainer = styled.div`
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
const PlantForm = ({ history }) => {
  const id = localStorage.getItem("id");
  const [add, setAdd] = useState({
    nickname: "",
    species_name: "",
    frequency: "",
    photo: ""
  });
  const handleChange = e => {
    setAdd({
      ...add,
      [e.target.name]: e.target.value
    });
  };
  const handlePhoto = e => {
    setAdd({
      ...add,
      photo: e.target.files[0]
    });
  };
  const addPlant = () => {
    const formData = new FormData();
    formData.append("nickname", add.nickname);
    formData.append("species_name", add.species_name);
    formData.append("frequency", add.frequency);
    formData.append("photo", add.photo);
    const config = {
      "content-type": "multipart/form-data",
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .post(
        `https://water-my-plantss.herokuapp.com/api/user/${id}/plants`,
        formData,
        config
      )
      .then(res => {
        console.log(res);
        history.push(`/users/${id}/plants`);
      })
      .catch(err => console.log(err));
  };
  const handleSubmit = e => {
    e.preventDefault();
    addPlant(add);
  };
  return (
    <PlantContainer>
      <form className="forms" onSubmit={handleSubmit}>
        <Header1 className="header">
          <img className="newplant" src={anotherplant} />
          <h1 className="title">New Plant</h1>
        </Header1>
        <input
          className="each"
          type="text"
          id="nickname"
          placeholder="nickname"
          name="nickname"
          value={add.nickname}
          onChange={handleChange}
        />
        <input
          className="each"
          type="text"
          name="species_name"
          id="species"
          placeholder="species"
          value={add.species_name}
          onChange={handleChange}
        />
        <input
          className="each"
          type="text"
          name="frequency"
          id="watering"
          placeholder="watering schedule"
          value={add.frequency}
          onChange={handleChange}
        />
        <input
          className="each"
          type="file"
          name="photo"
          id="watering"
          placeholder="photo"
          onChange={handlePhoto}
        />
        <Button size="large" variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </PlantContainer>
  );
};
export default PlantForm;
