import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Cookies } from "react-cookie";

const cookies = new Cookies();


export interface userType {
    user: { firstName: string | null, profilePicture: string | null }
}

type addUserType = { firstName: string, profilePicture: string }

const initialState: userType = {
    user: { firstName: null, profilePicture: null }
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserDetails: (state, { payload }: PayloadAction<addUserType>) => {
            state.user.firstName = payload?.firstName;
            state.user.profilePicture = payload?.profilePicture;
        },

        removeUser: (state) => {
            state.user.firstName = null;
            state.user.profilePicture = null;
            
            cookies.remove("accessToken", { path: "/" });
            cookies.remove("token", { path: "/" });
            cookies.remove("refreshToken", { path: "/" });
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUserDetails, removeUser } = userSlice.actions;

export default userSlice.reducer;