
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {PostArrayType, PostType} from "../models/redux-models";

const initialPostState:PostArrayType={
    all_posts:[]
}

const postSlice=createSlice({
    name:'post',
    initialState:initialPostState,
    reducers:{
        setPosts(state,action:PayloadAction<PostType[]>){
            state.all_posts = action.payload;
        }
    }
})
export default postSlice;