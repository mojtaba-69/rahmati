import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  sidebarshow: false
};

 const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarShow:(state,action)=>{
      state.sidebarshow = action.payload.sidebarshow
  }
  }
});

export const { setSidebarShow } = sidebarSlice.actions;
export default sidebarSlice.reducer;
