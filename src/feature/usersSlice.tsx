import { createSlice } from "@reduxjs/toolkit";

export type AuthState = any | null;
const initialState = {
    data: null as AuthState,
    logged: {}
}
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsersData: (state, { payload }) => {
            state.data = payload;
        },
        addUsers: (state, { payload }) => {
            state.data.push(payload)
        },
        editUsers: (state, { payload }) => {
            state.data = state.data.map((v: any) => {
                if (v.id === payload[1]) {
                    return {
                        ...v,
                        nom: payload[0].nom
                    };
                }
                else {
                    return v;
                }
            })
        },
        deleteUsers: (state, { payload }) => {
            state.data = state.data.filter((v: any) => v.id !== payload)
        },
        setUserLogged: (state, { payload }) => {
            state.logged = payload
        },
        setUserLogout: (state, { payload }) => {
            state.logged = {}
        }
    }
})

export const { setUsersData, addUsers, editUsers, deleteUsers, setUserLogged } = usersSlice.actions
export default usersSlice.reducer