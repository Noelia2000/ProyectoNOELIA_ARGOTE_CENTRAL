import { UserId, deleteUserById } from "../store/users/slice";
import { UseAppDispatch } from "./store";



export  const useUserActions=()=>{
    const dispatch= UseAppDispatch();
    
      const removeUser= (id:UserId)=>{
        dispatch(deleteUserById(id));
};
return{removeUser};
};