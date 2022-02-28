import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { connect, type ConnectedProps } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { connect, type ConnectedProps, type RootState, type AppDispatch };

export const useEvents = () => useAppSelector((state) => state.events.events);
