export const SAVE_USER = 'SAVE_USER';
export const EDIT_PLANT = 'EDIT_PLANT';
export const DELETE_PLANT= 'DELETE_PLANT';
export const ADD_PLANT= 'ADD_PLANT';
export const saveUser = (user) =>{
   return {
    type:SAVE_USER,
    payload: user
    }
}
export const editPlant = (plant) =>{
    return {
        type:EDIT_PLANT,
        payload: plant
    }
}

export const deletePlant = (plantId) =>{
    return {
        type:DELETE_PLANT,
        payload:plantId
    }
}
export const addPlant = (plantWithUserId) =>{
    return {
        type:ADD_PLANT,
        payload:plantWithUserId
    }
}