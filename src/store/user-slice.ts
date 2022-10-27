
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {UsersArrayType, UsersType} from "../models/redux-models";

const initialPostState:UsersArrayType={
    all_users:[]
}

const postSlice=createSlice({
    name:'user',
    initialState:initialPostState,
    reducers:{
        setUsers(state,action:PayloadAction<UsersType[]>){
            state.all_users = action.payload;
        },
    }
})
export default postSlice;