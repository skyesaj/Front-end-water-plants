import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const PlantContainer = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
  `


const PlantCard = props => {
    
    const newId = localStorage.getItem('id')    
    
    console.log('plantcard props: ', props)

    const deletePlant = () => {
        axiosWithAuth()
        .delete(`/plants/${props.plants.id}`)
        .then(res => {
            console.log('delete plants res: ', res)
            // props.history.push(`/users/${newId}/plants`)
            setTimeout(() => window.location.reload(), 500)
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
                    {/* <img src={props.plants.image_url}/> */}
                    <h3>Plant Species: {props.plants.species}</h3>
                    <h4>Watering Schedule: {props.plants.water_schedule}</h4>
                    <button onClick={deletePlant}>
                        Delete
                    </button>
                    <Link to={`/update-plant/${props.plants.id}`}>
                        <button 
                        // onclick={props.history.push(`/update-plant/${props.plants.id}`)}
                        >
                            Edit
                        </button>
                    </Link>
                </div>
            </div>
        </PlantContainer>
    )
}

export default PlantCard;