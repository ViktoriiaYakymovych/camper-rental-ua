import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operations";

const initialState = {
  campers: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleGetAllCampersFulfield = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.campers = payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.rejected, handleRejected)
      .addCase(fetchAllCampers.fulfilled, handleGetAllCampersFulfield);
  },
});

export const campersReducer = campersSlice.reducer;
