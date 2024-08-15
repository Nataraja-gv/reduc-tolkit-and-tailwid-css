import {   createSlice } from "@reduxjs/toolkit";


export const inputSlice = createSlice({
    name:"inputValue",
    initialState:{
        inputValue:""
    },
    reducers:{
        onChanageInput:(state,action)=>{
          state.inputValue = action.payload     
        }
    }
    }
)

export const {onChanageInput}=inputSlice.actions
export default inputSlice.reducer