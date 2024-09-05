import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice( {
    name: 'cart',
    initialState,
    reducers: {
        addToCart ( state, action ) {
            state.push( action.payload );
        },
        removefromCart ( state, action ) {
            return state.filter( item => item.id !== action.payload )
        },
    }
} );
export const { addToCart, removefromCart } = cartSlice.actions;
export default cartSlice.reducer;