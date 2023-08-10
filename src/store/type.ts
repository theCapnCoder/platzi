import { Action, ThunkAction } from "@reduxjs/toolkit"
import { store } from "./store"
import { useDispatch } from "react-redux"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
