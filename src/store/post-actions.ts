import postSlice from './post-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {PostType} from "../models/redux-models";
import PostService from "../service/postService";

export const postActions=postSlice.actions

export const fetchPosts=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
            if(getState().post.all_posts.length===0){
                const response:PostType[]=await PostService.getAllPosts();
                dispatch(postActions.setPosts(response))
            }
    }
}
