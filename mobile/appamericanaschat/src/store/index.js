import {createSlice, configureStore} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        name: '',
    },
    reducers: {
        changeProduct: (state, {payload}) => {
            state.name = payload.name;
        },
    },
});

const store = configureStore({
    reducer: productSlice.reducer,
});

export const {changeProduct} = productSlice.actions;

export default store;
