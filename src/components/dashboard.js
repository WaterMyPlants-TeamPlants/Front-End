import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const user = useSelector((state) => state);
    const { push } = useHistory();
    const LogOutButton = () => {
        localStorage.removeItem("token");
        push("/login");
    };
    return (
        <div>
            <div>
                <button>Edit User</button>
                <button>Add Plant</button>
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
                            <button>Edit Plant</button>
                        </div>

                        // Style each plant div to be a card for each plant.
                    );
                })}
            </div>
        </div>
    );
};

export default Dashboard;
