import { createSlice } from "@reduxjs/toolkit";

export type AuthState = any | null;
const initialState = {
    voitures: null as AuthState
}
export const voituresSlice = createSlice({
    name: "voitures",
    initialState,
    reducers: {
        setVoituresData: (state, { payload }) => {
            state.voitures = payload;
        },
        addVoitures: (state, { payload }) => {
            state.voitures.push(payload)
        },
        editVoitures: (state, { payload }) => {
            state.voitures = state.voitures.map((v: any) => {
                if (v.id === payload[1]) {
                    return {
                        ...v,
                        artist: payload[0].artist
                    };
                }
                else {
                    return v;
                }
            })
        },
        deleteVoitures: (state, { payload }) => {
            state.voitures = state.voitures.filter((v: any) => v.id !== payload)
        }
    }
})

export const { setVoituresData, addVoitures, editVoitures, deleteVoitures } = voituresSlice.actions
export default voituresSlice.reducer