import { createSlice } from "@reduxjs/toolkit";

const initialState:Location[] = [];


export const slice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
      setLocationList:(state,action) =>{
        state.push(action.payload)
      },
      addLocation:(state,action) =>{
        state.push(action.payload)
      }
    },
  })
  
  export const { addLocation,setLocationList } = slice.actions
  const reducer = slice.reducer
  export default reducer