import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        color: "color",
        id: "id",
        make: "make",
        model: "model",
        year: "year",
    },
    reducers: {
        choosecolor: (state, action) => { state.color = action.payload},
        chooseid: (state, action) => { state.id = action.payload},
        choosemake: (state, action) => { state.make = action.payload},
        choosemodel: (state, action) => { state.model = action.payload},
        chooseyear: (state, action) => { state.year = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { choosecolor, chooseid, choosemake, choosemodel, chooseyear} = rootSlice.actions