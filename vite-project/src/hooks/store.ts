import type { AppDispatch,RootState } from "../store";
import { useDispatch, UseDispatch, useSelector} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector
export const UseAppDispatch: ()=>AppDispatch=useDispatch;
