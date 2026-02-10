import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "productCart",
  initialState: {
    cartItem: []
  }
  ,
  reducers: {
    addToCart:

      (state, action) => {
        const NewDat = action.payload
        state.cartItem.push(NewDat)
      }, 
      removeCart :
      (state, action) => {
        const indexItem = action.payload
        state.cartItem.splice(indexItem, 1)
      }
  }
})
export const { addToCart } = cart.actions
export const { removeCart} = cart.actions
export default cart.reducer


