import React, { useState } from "react";
import Styled from "styled-components";

import pencil from "../logos/pencil.png";
import user from "../logos/User.png";


const UserValues = { //can use user values here instead of empty strigns
    username: "hairo",
    email: "",
    phone: "",
    notifications: "",
}


const EditUser = () => {
    const [edit, setEdit] = useState(UserValues)

    const Change = (evt) => {
        const correctValue = evt.target.type === "checkbox" ? evt.target.checked : 
        evt.target.value;
        setEdit({...edit,[evt.target.name] : correctValue})
        console.log(correctValue)
    }

    return(
        <EditForm>
            <div className="user"><img id="userPic" src={user} alt="user"/></div>
            <label><h2>Username:</h2>
                <input 
                type="text"
                name="username"
                onChange={Change}
                value={edit.username}
                /><img id="pencil" src={pencil} alt="edit pencil"/>
            </label>
            <br/>
            <label><h2>Email address:</h2>
                <input 
                type="text"
                name="email"
                onChange={Change}
                value={edit.email}
                /><img id="pencil" src= {pencil} alt="edit pencil"/>
            </label>
            <br/>
            <label><h2>Phone number:</h2>
                <input 
                type="text"
                name="phone"
                onChange={Change}
                value={edit.phone}
                /><img id="pencil" src= {pencil} alt="edit pencil"/>
            </label>
            <br/>
            <label><h2>Turn notifications on or off:</h2><br/>
                <input 
                type="checkbox"
                name="notifications"
                onChange={Change}
                value={edit.notifications}
                />
            </label>
        </EditForm>
    )
}

const EditForm = Styled.form`
display: flex;
flex-direction: column;
align-items: center;

#pencil {
    width: 5%;
    height: 3%;
    border: solid black;
}
#userPic {
    width: 25%;
}
.user {
    margin-top: 30%;
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

h2 {
    display: flex;
    justify-content: flex-start;
    font-size:80%;
    /* border: solid black; */
    width:100%;
}

input {
    display: flex;
    flex-direction: right;
    height: 6%;
    /* border: solid black; */
}

`

export default EditUser;