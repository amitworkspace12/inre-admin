// src/store/valueSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboardTable: [],
  backgroundTable: [],
  clientTable: [],
  PilotTable: [],
};

const valueSlice = createSlice({
  name: 'values',
  initialState,
  reducers: {
    setDashboardTable: (state, action) => {
      state.dashboardTable = action.payload;
    },
    setBackgroundTable: (state, action) => {
      state.backgroundTable = action.payload;
    },
    setClientTable: (state, action) => {
      state.clientTable = action.payload;
    },
    setPilotTable: (state, action) => {
      state.PilotTable = action.payload;
    },
  },
});

export const {  setDashboardTable,  setBackgroundTable, setClientTable, setPilotTable } = valueSlice.actions;
export default valueSlice.reducer;
