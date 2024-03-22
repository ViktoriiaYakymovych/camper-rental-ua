import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://65fc7f549fc4425c653045c8.mockapi.io/adverts";

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/advert");
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
