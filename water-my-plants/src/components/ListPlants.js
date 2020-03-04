import React, { useContext } from 'react';
import { PlantContext } from '../utils/context';
import PlantCard from './PlantCard';

const ListPlants = (props) => {
    const plants = useContext(PlantContext);
    console.log("plants from plantContext: ", [plants] );
    
    return(
        <div className = 'plant-page'>
            {/* {
            // plants || 
            plants.map(flower =>{
                return(

                    <PlantCard history={props.history} key={flower.id} id={props.id} setPlants={props.setPlants} plants={flower} />)}
                )
            }  */}
        </div>
    )
}

export default ListPlants;