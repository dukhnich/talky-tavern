import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'counter',
    initialState: {
        key: '',
        currentNpc: null,
        settings: null,
    },
    reducers: {
        setKey: (state, action) => {
            state.key = action.payload;
        },
        changeSettings: (state, action) => {
            state.settings = {...state.settings, ...action.payload};
        },
        setCurrentNpc: (state, action) => {
            state.currentNpc = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setKey, setCurrentNpc, changeSettings } = chatSlice.actions

export default chatSlice.reducer;
