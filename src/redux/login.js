import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loginshow:true
};

const loginSlice = createSlice({
  name:"login",
  initialState,
  reducers:{
    setShowLogin:(state,action)=>{
        state.loginshow = action.payload.loginshow
    }
  }
})

export const {setShowLogin}= loginSlice.actions;
export default loginSlice.reducer;