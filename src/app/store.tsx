import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../feature/usersSlice";
import voituresSlice from "../feature/voituresSlice";

export default configureStore({
    reducer: {
        voitures: voituresSlice,
        users: usersSlice
    }
})