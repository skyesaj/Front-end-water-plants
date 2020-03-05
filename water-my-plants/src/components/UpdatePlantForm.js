import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import anotherplant from "../img/logo-earth.svg";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import axios from "axios";
const Main1 = styled.div`
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

const UpdatePlantForm = ({
  history,
  match: {
    params: { id }
  }
}) => {
  const [plantData, newPlantData] = useState({
    nickname: "",
    species_id: "",
    frequency: "",
    photo: ""
  });
  console.log(id);
  const newId = localStorage.getItem("id");

  const handleChange = e => {
    newPlantData({
      ...plantData,
      [e.target.name]: e.target.value
    });
    console.log(plantData);
  };
  const handlePhoto = e => {
    newPlantData({
      ...plantData,
      photo: e.target.files[0]
    });
  };

  const handleSubmit = e => {
    console.log(id);
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", plantData.nickname);
    formData.append("species_id", plantData.species_id);
    formData.append("frequency", plantData.frequency);
    formData.append("photo", plantData.photo);
    const config = {
      "content-type": "multipart/form-data",
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    // axiosWithAuth()
    axios
      .put(
        `https://water-my-plantss.herokuapp.com/api/user/${newId}/plants/${id}`,
        formData,
        config
      )
      .then(res => {
        console.log(res);
        history.push(`/users/${newId}/plants`);
      })
      .catch(err => console.log(err));
  };

  return (
    <Main1 className="update">
      <form className="forms" onSubmit={handleSubmit}>
        <Header1 className="header">
          <img className="newplant" src={anotherplant} />
          <h1 className="title">Edit your Plant!</h1>
        </Header1>
        <label htmlFor="nickname">NickName:</label>
        <input
          id="nickname"
          name="nickname"
          className="each"
          value={plantData.nickname}
          onChange={handleChange}
        />
        <label htmlFor="species">Species:</label>
        <input
          id="species"
          name="species_id"
          className="each"
          value={plantData.species_id}
          onChange={handleChange}
        />
        <label htmlFor="species">Watering Schedule: YYYY-MM-DD HH:MM</label>
        <input
          id="water_schedule"
          name="frequency"
          className="each"
          value={plantData.frequency}
          onChange={handleChange}
        />
        <input
          className="each"
          type="file"
          name="photo"
          id="photo"
          placeholder="photo"
          onChange={handlePhoto}
        />
        <Button size="large" variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Main1>
  );
};

export default UpdatePlantForm;
