import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'counter',
    initialState: {
        key: '',
        currentNpc: null,
    },
    reducers: {
        setKey: (state, action) => {
            state.key = action.payload;
        },
        setCurrentNpc: (state, action) => {
            state.currentNpc = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setKey, setCurrentNpc } = chatSlice.actions

export default chatSlice.reducer;
