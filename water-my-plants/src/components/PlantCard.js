import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const PlantCard = props => {
    
    console.log('plantcard props: ', props)

    const deletePlant = () => {
        axiosWithAuth()
        .delete(`/plants/${props.plants.id}`)
        .then(res => {
            console.log('delete plants res: ', res)
            axiosWithAuth()
            .get(`users/${props.id}/plants`)
            .then(res => {
                props.setPlants(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (

        <div className='plant-container' >
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
        </div>
    )
}

export default PlantCard;