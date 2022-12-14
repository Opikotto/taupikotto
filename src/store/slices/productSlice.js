import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const productSlice = createSlice({
     name: 'product',
     initialState: {
          productItems: [],
     },
     reducers: {
          getItems: (state, action) => {
               state.productItems = action.payload;
          }
     }
});

export const getItemsData = () => async (dispatch) => {
     try {
          const res = await axios.get(`https://fakestoreapi.com/products`);
          dispatch(getItems(res.data))
     } catch (err) {
          throw new Error(err);
     }
}

export const { getItems } = productSlice.actions
export default productSlice.reducer