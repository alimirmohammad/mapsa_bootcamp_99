import { createSlice } from '@reduxjs/toolkit';

// export const asyncInc = () => dispatch => {
//   setTimeout(() => dispatch(inc()), 2000);
// };

const countSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incremented(state, action) {
      state.value++;
    },
    decremented(state, action) {
      state.value--;
    },
    reset(state, action) {
      state.value = 0;
    }
  }
});

export const { incremented, decremented, reset } = countSlice.actions;

export default countSlice.reducer;
