import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    cpu: {},
    motherboard: {},
    ram: {},
    powerSupply: {},
    storage: {},
    monitor: {},
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, { payload }) => {
      //   state.product = action.payload;
      if (payload.Category === "CPU") {
        state.product.cpu = payload;
      } else if (payload.Category === "RAM") {
        state.product.ram = payload;
      } else if (payload.Category === "Monitor") {
        state.product.monitor = payload;
      } else if (payload.Category === "Motherboard") {
        state.product.motherboard = payload;
      } else if (payload.Category === "powerSupplyUnit") {
        state.product.powerSupply = payload;
      } else if (payload.Category === "storageDevice") {
        state.product.storage = payload;
      }
    },
  },
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
