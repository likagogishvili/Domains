import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  card: [],
  searchByName: "",
  priceRange: {},
  symbolRange: {},
  categories: [],
  domainZone: [],
};

const counterSlice = createSlice({
  name: "addingData",
  initialState,
  reducers: {
    addInCard(state, action) {
      state.card = action.payload;
    },
    addSearchByName(state, action) {
      state.searchByName = action.payload;
    },
    priceRangeSetter(state, action) {
      state.priceRange = action.payload;
    },
    symbolRangeSetter(state, action) {
      state.symbolRange = action.payload;
    },
    categoriesSetter(state, action) {
      state.categories = action.payload;
    },
    domainZoneSetter(state, action) {
      state.domainZone = action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
