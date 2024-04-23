import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/products";
export const getAllProducts = createAsyncThunk(
  "getProducts",
  async (data, { rejectWithVAlue }) => {
    try {
      const res = await axios(API_URL, data);
      return res.data;
    } catch (err) {
      return rejectWithVAlue(err.message);
    }
  }
);
