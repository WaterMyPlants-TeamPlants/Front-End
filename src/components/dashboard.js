import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../AxiosWithAuth';
import {deletePlant} from '../actions/index';
import styled from 'styled-components';
const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state);
    const { push } = useHistory();
    const LogOutButton = () => {
        localStorage.removeItem("token");
        push("/login");
    };
    const pushToEditUser = () => {
        push('/edituser');
        
    }
    const pushToAddPlant = () => {
        push('/addplant');
    }
    const pushToEditPlant = (id) => {
        push(`/editplant/${id}`);
    }
    const deletePlant = (id) => {
        axiosWithAuth()
        .delete(`https://plantswater.herokuapp.com/api/plants/${id}`)
        .then(res =>{
            console.log(res);
            dispatch(deletePlant(id));
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <StyledDashboardForm>
            <div>
                <h2>Dashboard</h2>
                <div>
                <p>Username: {user.username}</p>
                <p>User Phonenumber: {user.telephone}</p>
            </div>
                <button onClick = {pushToEditUser}>Edit User</button>
                <button onClick= {pushToAddPlant}>Add Plant</button>
                <button onClick={LogOutButton}>Log Out</button>
            </div>
            {/* Make the above button a nav bar  */}
            </StyledDashboardForm>
            <YourPlantsForm>
            <div>
                <h3>Your Plants</h3>
                {user.plants.map((ele, idx) => {
                    return (
                        <divPlantForm>
                            <div key={idx}>
                            <img src={ele.img_url} />
                            <p>Name:{ele.nickname}</p>
                            <p>Species:{ele.species}</p>
                            <p>How often to water: Every {ele.frequency}hours</p>
                            <button onClick={()=>pushToEditPlant(ele.id)}>Edit Plant</button>
                            <button onClick={()=>deletePlant(ele.id)}>Delete Plant</button>
                        </div>
                        </divPlantForm>
                        // Style each plant div to be a card for each plant.
                    );
                })}
            </div>
            </YourPlantsForm>
        </div>
    );
};

const StyledDashboardForm = styled.form`
    margin: 1% 1% 20%;
    padding: 1% 5% 5% 5%;
    box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease-in;
    background-color: #e5fff9;

  h2 {
      color: #778899;
      text-align: center;
  }

    button {
        justify-content: center;
        background-color: #8ca9fc;
        border-radius: 0.5rem;
        height: 3.5rem;
        width: 20%;
        margin: 3px;
        color: #ffffff; 
    }
`;

const YourPlantsForm = styled.form`

h3 {
      color: #778899;
      text-align: center;
  }


button {
        justify-content: center;
        background-color: #8ca9fc;
        border-radius: 0.5rem;
        height: 3.5rem;
        width: 20%;
        margin: 3px;
        color: #ffffff; 
    }
`;

const divPlantForm = styled.form`
    box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease-in;
`;

export default Dashboard;
