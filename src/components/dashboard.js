import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../AxiosWithAuth';
import {deletePlant} from '../actions/index';
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
    const deletePlantfunction = (id) => {
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
            <div>
                <button onClick = {pushToEditUser}>Edit User</button>
                <button onClick= {pushToAddPlant}>Add Plant</button>
                <button onClick={LogOutButton}>Log Out</button>
            </div>
            {/* Make the above button a nav bar  */}
            <div>
                <p>Username: {user.username}</p>
                <p>User Phonenumber: {user.telephone}</p>
            </div>
            <div>
                <h3>Your Plants</h3>
                {user.plants.map((ele, idx) => {
                    return (
                        <div key={idx}>
                            <img src={ele.img_url} />
                            <p>Name:{ele.nickname}</p>
                            <p>Species:{ele.species}</p>
                            <p>How often to water: Every {ele.frequency}hours</p>
                            <button onClick={()=>pushToEditPlant(ele.id)}>Edit Plant</button>
                            <button onClick={()=>deletePlantfunction(ele.id)}>Delete Plant</button>
                        </div>

                        // Style each plant div to be a card for each plant.
                    );
                })}
            </div>
        </div>
    );
};

export default Dashboard;
