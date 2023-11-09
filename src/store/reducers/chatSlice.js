import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'counter',
    initialState: {
        key: localStorage.getItem('npc-api-key'),
    },
    reducers: {
        setKey: (state, action) => {
            state.key = action.payload;
            const value = localStorage.getItem('npc-api-key');
            if (value !== action.payload) {
                localStorage.setItem('npc-api-key', action.payload || '');
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setKey } = chatSlice.actions

export default chatSlice.reducer;
