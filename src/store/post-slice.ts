
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {PostArrayType, PostType} from "../models/redux-models";

const initialPostState:PostArrayType={
    all_posts:[],
    isLoading: false,
    error: false,
}

const postSlice=createSlice({
    name:'post',
    initialState:initialPostState,
    reducers:{
        setLoading(state){
            state.isLoading = true
        },
        setError(state, action){
            state.error = action.payload;
            state.isLoading = false;
        },
        setPosts(state,action:PayloadAction<PostType[]>){
            state.all_posts = action.payload;
            state.isLoading = false;
        }
    }
})
export default postSlice;