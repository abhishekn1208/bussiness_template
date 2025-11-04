import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CartItem {
    id : string;
    name : string;
    price : number;
    variantQuantity? : number;
    unit? : string;
    quantity : number;
    image? : string;
    category : string;
}

interface CartState {
    items : CartItem[];
    totalQuantity : number;
    totalPrice : number;

}

const initialState : CartState = {
    items : [],
    totalQuantity : 0,
    totalPrice : 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state,action:PayloadAction<CartItem>)=>{
            const item = action.payload;
            const existingItem = state.items.find((i)=>i.id === item.id)
            if(existingItem){
                existingItem.quantity +=  item.quantity;
            }else{
                state.items.push(item)
            }

            state.totalQuantity += item.quantity;
            state.totalPrice += item.price * item.quantity;
        },
        removeFromCart : (state,action:PayloadAction<string>)=>{
            const itemId = action.payload;
            const existingItem = state.items.find((i)=>i.id===itemId)
            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter((i)=>i.id !== itemId)
            }
        },

        clearCart : (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;