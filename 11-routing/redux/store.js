import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./todo";

const store = configureStore({ reducer });

export { store };