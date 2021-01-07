import React, { useState } from "react";
import Styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../AxiosWithAuth";
import { saveUser } from "../actions";
//imported images
import pencil from "./images/pencil.png";
import userImg from "./images/User.png";
import { useSelector, useDispatch } from "react-redux";
const UserInfo = {
  username: "",
  //   email: "",
  telephone: "",
  //   notifications: "",
};

const EditUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const [edit, setEdit] = useState(UserInfo);
  const { push } = useHistory();
  const Change = (evt) => {
    const correctValue =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setEdit({ ...edit, [evt.target.name]: correctValue });
    console.log(correctValue);
  };
  console.log("THIS IS THE EDIT", { edit });
  const Save = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .put(`https://plantswater.herokuapp.com/api/users/${user.id}`, edit)
      .then((res) => {
        console.log(res);
        dispatch(saveUser(res.data))
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const pushToDash = () => {
    push("/dashboard");
  };
  console.log(user);
  return (
    <EditForm onSubmit={Save}>
      <div className="user">
        <img id="userPic" src={userImg} alt="user" />
      </div>
      <label className="username">
        <h2>Username:</h2>
        <input
          type="text"
          name="username"
          onChange={Change}
          value={edit.username}
        />
        <img id="pencil" src={pencil} alt="edit pencil" />
      </label>
      <br />
      {/* <label>
        <h2>Email address:</h2>
        <input type="text" name="email" onChange={Change} value={edit.email} />
        <img id="pencil" src={pencil} alt="edit pencil" />
      </label>
      <br /> */}
      <label>
        <h2>Phone number:</h2>
        <input
          type="text"
          name="telephone"
          onChange={Change}
          value={edit.yelephone}
        />
        <img id="pencil" src={pencil} alt="edit pencil" />
      </label>
      <br />
      {/* <label className="notifications">
        <h2>Turn notifications on:</h2>
        <br />
        <input
          id="checkbox"
          type="checkbox"
          name="notifications"
          onChange={Change}
          value={edit.notifications}
        />
      </label> */}
      <button>Save</button>
      <button onClick={pushToDash}>Back to Dash</button>
    </EditForm>
  );
};

const EditForm = Styled.form`
display: flex;
flex-direction: column;
align-items: center;

#pencil {
    width: 4%;
    height: 3%;
    /* border: solid black; */
}
#userPic {
    width: 25%;
}
.user {
    margin-top: 40%;
    margin-bottom: 20%;
}

label {
    display: flex;
    /* border: solid black; */
    justify-content: flex-end;
    align-items: center;
    width:90%;
    margin-bottom: -10%;  
}

.username {
    display:flex;
    justify-content: end;
}

.notifications {
    margin-top: 19%;
}

h2 {
    display: flex;
    justify-content: flex-start;
    font-size:85%;
    /* border: solid black; */
    width:100%;
}

input {
    display: flex;
    flex-direction: right;
    border:0;
    /* border: solid black; */
}

button {
    margin-top: 20%;
    padding: 1.5%;
    width: 20%;
    border-radius: 0.5rem;
    font-size: 110%;
    text-align: center;
    text-decoration: none;
    border: none;
    background-color: #8ca9fc;
    color: #e5ffe5;
    transition: 0.5s;
}

button:hover {
    cursor: pointer;
    background-color: #e5ffe5;
    color: #8ca9fc;
}

`;

export default EditUser;
