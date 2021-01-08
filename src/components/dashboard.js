import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../AxiosWithAuth";
import { deletePlant } from "../actions/index";
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
    push("/edituser");
  };
  const pushToAddPlant = () => {
    push("/addplant");
  };
  const pushToEditPlant = (id) => {
    push(`/editplant/${id}`);
  };
  const deletePlantfunction = (id) => {
    axiosWithAuth()
      .delete(`https://plantswater.herokuapp.com/api/plants/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(deletePlant(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <StyledDiv>
      <StyledNav>
        <button className = 'edit-user' onClick={pushToEditUser}>Edit User</button>
        <button className = 'add-plant' onClick={pushToAddPlant}>Add Plant</button>
        <h2>Water My Plants</h2>
        <button className = 'log-out' onClick={LogOutButton}>Log Out</button>
      </StyledNav>
      {/* Make the above button a nav bar  */}
      <div>
        <p>Username: {user.username}</p>
        <p>User Phonenumber: {user.telephone}</p>
      </div>
      <div>
        <h3>My Plants</h3>
        {user.plants.map((ele, idx) => {
          return (
            <div key={idx}>
              <img src={ele.img_url} />
              <p>Name:{ele.nickname}</p>
              <p>Species:{ele.species}</p>
              <p>How often to water: Every {ele.frequency}hours</p>
              <button onClick={() => pushToEditPlant(ele.id)}>
                Edit Plant
              </button>
              <button onClick={() => deletePlantfunction(ele.id)}>
                Delete Plant
              </button>
            </div>

            // Style each plant div to be a card for each plant.
          );
        })}
      </div>
    </StyledDiv>
  );
};

const StyledNav = styled.nav`
  background-color: #384f94;
  margin: -11% 0 0 0;
  padding: 2% 0 2% 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  button{
    background-color: #384f94;
    border: none;
    color: rgba(229, 255, 229, 1);
    font-weight: bold;
  }
  .edit-user{
    margin: 0 10% 0 0;
  }
  .add-plant{
    margin: 0 11% 0 0;
  }
  h2{
    margin: 0 30% 0 0;
    font-size: 1.7rem;
    color: rgba(229, 255, 229, 1);
    padding: 0 0 1.5% 0;
  }
`
const StyledDiv = styled.div`
  background-color: rgba(229, 255, 229, 1);

  
`

export default Dashboard;
