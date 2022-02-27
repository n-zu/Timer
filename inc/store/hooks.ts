import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

import { connect as _connect } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type mapStateToPropsType = (state: RootState) => {};
export type mapDispatchToPropsType = (dispatch: AppDispatch) => {};
export const connect = (
  mapStateToProps: mapStateToPropsType,
  mapDispatchToProps: mapDispatchToPropsType
) => _connect(mapStateToProps, mapDispatchToProps);
