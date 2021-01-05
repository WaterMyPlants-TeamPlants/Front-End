import React, { useState } from "react";
import Styled from "styled-components";
import axios from "axios";

//imported images
import pencil from "../logos/pencil.png";
import user from "../logos/User.png";


const UserInfo = {
    username: "",
    email: "",
    phone: "",
    notifications: "",
}


const EditUser = () => {
    const [edit, setEdit] = useState(UserInfo)

    const Change = (evt) => {
        const correctValue = evt.target.type === "checkbox" ? evt.target.checked : 
        evt.target.value;
        setEdit({...edit,[evt.target.name] : correctValue})
        console.log(correctValue)
    }

    const Save = (evt) => {
        evt.preventDefault();
        axios
        .post(``)
        .then(res =>{

        })
        .catch(err => console.log(err))
    }



    return(
        <EditForm onSubmit={Save}>
            <div className="user"><img id="userPic" src={user} alt="user"/></div>
            <label className="username"><h2>Username:</h2>
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
            <label className="notifications"><h2>Turn notifications on or off:</h2><br/>
                <input
                id="checkbox"
                type="checkbox"
                name="notifications"
                onChange={Change}
                value={edit.notifications}
                />
            </label>
            <button>Save</button>
        </EditForm>
    )
}

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
}

`

export default EditUser;