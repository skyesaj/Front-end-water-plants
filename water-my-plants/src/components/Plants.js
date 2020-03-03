import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { PlantContext } from '../utils/context';
import ListPlants from './ListPlants';
import { useParams } from 'react-router-dom';

const Plants = props => {
    const {id} = useParams();
    const [plants, setPlants] = useState();
    const [users, setUsers] = useState();
    
    useEffect(() => {
        axiosWithAuth()
        .get(`/users/${id}/plants`)
        .then(res => {
            setPlants(res.data);
            console.log(res);
        })
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            setUsers(res.data);
            console.log('users res: ', res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div>
                <PlantContext.Provider value={plants}>
                    <ListPlants setPlants={setPlants} id={id} history={props.history}/>
                </PlantContext.Provider>
            </div>
        </>
    );
};

export default Plants;