import {configureStore} from '@reduxjs/toolkit';
import postSlice from './post-slice'
import userSlice from "./user-slice";

const store=configureStore(
    {
        reducer:
            {post:postSlice.reducer,
            user:userSlice.reducer
            },
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;