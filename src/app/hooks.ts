import {AppDispatch, RootState} from "./store.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;