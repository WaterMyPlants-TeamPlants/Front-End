import React from 'react';
import { useSelector, useDispatch } from "react-redux";


const Dashboard = ()=>{
    const user = useSelector(state => state)
    return(
        <div>
            {user.username}
            {user.telephone}
            {user.plants.map((ele)=>{
               return (
                <div>
                    {ele}
                </div>
               )
            })}
        </div>
    )
}

export default Dashboard