export const SAVE_USER = 'SAVE_USER';

export const saveUser = (user) =>{
   return {
    type:SAVE_USER,
    payload: user
    }
}