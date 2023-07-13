import { configureStore, createSlice } from '@reduxjs/toolkit';

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState: {
    name: 'a',
    age: '0',
    got: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGot: (state) => {
      state.got = !state.got;
    },
  },
});

export const { setName, setAge, setGot } = enrollmentSlice.actions;

const store = configureStore({
  reducer: {
    enrollment: enrollmentSlice.reducer,
  },
});

export default store;
