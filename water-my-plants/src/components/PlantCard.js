import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import plant2 from "../img/plant2.png";
const PlantContainer = styled.div`
  //   background: #608EFF;
  font-family: "Montserrat";
  height: 100vh;
  margin-top: 25px;
`;
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 450,
    margin: 0
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
const PlantCard = props => {
  const classes = useStyles();
  const id = localStorage.getItem("id");
  const deletePlant = () => {
    axiosWithAuth()
      .delete(`api/user/${id}/plants/${props.plants.plantId}`)
      .then(res => {
        // props.history.push(`/users/${id}/plants`);
        setTimeout(() => window.location.reload(), 500);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <PlantContainer className="plant-container">
      <Card className={classes.root}>
        <CardContent key={props.plants.id} className="plant-card">
          <Typography variant="h5" component="h2">
            Plant Nickname: {props.plants.nickname}
          </Typography>
          <img
            style={{ width: "200px", height: "200px" }}
            src={props.plants.photo ? props.plants.photo : plant2}
          />
          <Typography className={classes.pos} color="textSecondary">
            Plant Species: {props.plants.species}
          </Typography>
          <Typography variant="body2" component="p">
            Watering Schedule: {props.plants.frequency}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={deletePlant}
          >
            Delete
          </Button>
          <Link to={`/update-plant/${props.plants.plantId}`}>
            <Button
              variant="contained"
              color="primary"
              // onclick={props.history.push(`/update-plant/${props.plants.id}`)}
            >
              Edit
            </Button>
          </Link>
        </CardContent>
      </Card>
    </PlantContainer>
  );
};
export default PlantCard;
