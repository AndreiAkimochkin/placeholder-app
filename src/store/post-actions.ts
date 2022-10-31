import postSlice from './post-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {PostType} from "../models/redux-models";
import PostService from "../service/postService";

export const postActions=postSlice.actions

export const fetchPosts=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        dispatch(postActions.setLoading())
        try{
               if(getState().post.all_posts.length===0){
                   const response:PostType[]= await PostService.getAllPosts();
               setTimeout(()=> {
                   dispatch(postActions.setPosts(response))
               },1500)
               }
           }catch(error) {
               dispatch(postActions.setError(error))
           }
    }
}
