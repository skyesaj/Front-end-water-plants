import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const UpdatePlantForm = ({ history,
    match: {
        params: { id }
    } 
}) => {
    const [plantData, newPlantData] = useState({
            nickname: '',
            species: '',
            water_schedule: ''
     });

     const newId = localStorage.getItem('id')

    const handleChange = e => {
        newPlantData({
            ...plantData,
            [e.target.name]: e.target.value
        });
        console.log(plantData);
    };

    const handleSubmit = e => {
        console.log(id);
        e.preventDefault();
        
        axiosWithAuth()
        .put(`/plants/${id}`, plantData)
        .then(res => {
            console.log(res);
            history.push(`/users/${newId}/plants`);
        })
        .catch(err => console.log(err));
    };


    return (
        <div className='update'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nickname'>
                    NickName: 
                </label>
                <input
                id='nickname'
                name="nickname"
                value={plantData.nickname}
                onChange={handleChange}
                />
                <label htmlFor='species'>
                    Species: 
                </label>
                <input
                id='species'
                name='species'
                value={plantData.species}
                onChange={handleChange}
                />
                <label htmlFor='species'>
                    Watering Schedule: YYYY-MM-DD HH:MM
                </label>
                <input
                id='water_schedule'
                name='water_schedule'
                value={plantData.water_schedule}
                onChange={handleChange}
                />
                <button>Edit Plant</button>
            </form>
        </div>
    )
}

export default UpdatePlantForm;