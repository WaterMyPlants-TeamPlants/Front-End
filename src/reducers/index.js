import { useReducer } from 'react'
import {SAVE_USER, EDIT_PLANT, DELETE_PLANT} from '../actions'


const initialUserState = {
    id:"",
    username:"",
    phoneNumber:"",
    plants:[]
}

const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case SAVE_USER:
            return action.payload;
        case EDIT_PLANT: 
            const newState = {...state}
            newState.plants.forEach(element => {
                if (element.id === action.payload.id){
                   element = action.payload
                }
            });
            return  newState
        case DELETE_PLANT:
            const stateAfterDelete = {...state}
            stateAfterDelete.plants.forEach((ele,idx) => {
                if (ele.id === action.payload){
                    stateAfterDelete.plants.splice(idx,1)
                }
            })
            return stateAfterDelete
    }   
    
    
}
export default userReducer;