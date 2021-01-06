import { useReducer } from 'react'
import {SAVE_USER} from '../actions'

const initialState = {
    id:"",
    username:"",
    phoneNumber:"",
    plants:[]
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_USER:
            return action.payload;
    }
    
}
export default userReducer;