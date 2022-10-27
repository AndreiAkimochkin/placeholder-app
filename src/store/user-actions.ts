import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {UsersType} from "../models/redux-models";
import userSlice from "./user-slice";
import UserService from "../service/userService";

export const userActions=userSlice.actions

export const fetchUsers=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().user.all_users.length===0){
            const response:UsersType[]=await UserService.getAllUsers();
            dispatch(userActions.setUsers(response))
        }
    }

}