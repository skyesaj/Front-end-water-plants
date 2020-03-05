import axios from "axios";
export const getToken = () => {
  localStorage.getItem("token");
};
const axiosWithAuth = () => {
  return axios.create({
    //config object, will need to update this to our baseURL herokuapp from backend
    baseURL: "https://water-my-plantss.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
export default axiosWithAuth;
