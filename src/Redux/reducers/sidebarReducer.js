import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  items:[],
}


export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
      toggle: (state, action) => {
        state.open = action.payload;
      },
      setItems: (state, action) => {
        state.items = action.payload;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggle, setItems } = sidebarSlice.actions
  
  export default sidebarSlice.reducer