import { UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { UseAppDispatch } from "./store";



export  const useUserActions=()=>{
    const dispatch= UseAppDispatch();
    

const addUser=({name, email,github})=>{
  dispatch(addNewUser({name, email,github}))
}

      const removeUser= (id:UserId)=>{
        dispatch(deleteUserById(id));
};
return{addUser,removeUser};
};