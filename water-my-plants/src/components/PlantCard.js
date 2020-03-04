import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from "styled-components";

const PlantContainer = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
  `
const PlantCard = props => {
    
    console.log('plantcard props: ', props)

    const deletePlant = () => {
        axiosWithAuth()
        .delete(`/plants/${props.plants.id}`)
        .then(res => {
            console.log('delete plants res: ', res)
            props.history.push('/plants')
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (

        <PlantContainer className='plant-container' >
            <div className='plant-page'>
                <div key={props.plants.id} className="plant-card">
                    <h1>Plant Nickname: {props.plants.nickname}</h1>
                    <h3>Plant Species: {props.plants.species}</h3>
                    <h4>Watering Schedule: {props.plants.water_schedule}</h4>
                    <button onClick={deletePlant}>
                        Delete
                    </button>
                    <button href={`/update-plant/${props.plants.id}`}>
                        Edit
                    </button>
                    
                </div>
            </div>
        </PlantContainer>
    )
}

export default PlantCard;