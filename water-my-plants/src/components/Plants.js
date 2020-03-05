import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { PlantContext } from "../utils/context";
import ListPlants from "./ListPlants";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const PlantContainer = styled.div`
  background: #608eff;
  font-family: "Montserrat";
  height: 100vh;
`;
const Plants = props => {
  const id = localStorage.getItem("id");
  const [plants, setPlants] = useState();
  const [users, setUsers] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get(`api/user/${id}/plants`)
      .then(res => {
        console.log(" this is plants.js response: ", res);
        setPlants(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get(`/user/${id}`)
  //       .then(res => {
  //         setUsers(res.data);
  //         console.log("users res: ", res.data);
  //       })
  //       .catch(err => console.log(err));
  //   }, []);
  return (
    <>
      <PlantContainer>
        <PlantContext.Provider value={plants}>
          <ListPlants setPlants={setPlants} id={id} history={props.history} />
        </PlantContext.Provider>
      </PlantContainer>
    </>
  );
};
export default Plants;
