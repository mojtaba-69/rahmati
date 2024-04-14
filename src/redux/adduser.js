import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userIdentity:"",
    userRole:"",
    userName:"",
    userEmail:"",
    userPhone:"",
    userAddress:"",
    userRegistered:"",
    activeUser:false,
    verifiedUser:false,
};
const adduserSlice = createSlice({
    name:"adduser",
    initialState,
    reducers:{
         setUser:(state,action)=>{
           state.userIdentity = action.payload.userIdentity;
           state.userRole = action.payload.userRole;
           state.userName = action.payload.userName;
           state.userEmail = action.payload.userEmail;
           state.userPhone = action.payload.userPhone;
           state.userRegistered = action.payload.userRegistered;
           state.userAddress = action.payload.userAddress;
           state.activeUser = action.payload.activeUser;
           state.verifiedUser = action.payload.verifiedUser;
         }
    }
   
});
export const {setUser} = adduserSlice.actions;
export default adduserSlice.reducer;
