import { createSlice } from '@reduxjs/toolkit';

// export const asyncInc = () => dispatch => {
//   setTimeout(() => dispatch(inc()), 2000);
// };

/*
const list = [
  {
    id: 1,
    name: 'ali',
    address: {
      city: 'Tehran',
      country: 'Kharej'
    }
  },
  {
    id: 2,
    name: 'soosan',
    address: {
      city: 'LA',
      country: 'Kharej'
    }
  },
];

const copyList = [...list];
const person = list.find(p => p.id === 1);
const copyPerson = {...person};
const newAddress = {...copyPerson.address, city: 'LA'}
copyPerson.address = newAddress;
const personIndex = list.findIndex(p => p.id === 1);
copyList[personIndex] = copyPerson;
return copyList;

Toolkit

const person = list.find(p => p.id === 1);
person.address.city = 'LA'
*/

const countSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incremented(state, action) {
      state.value += action.payload;
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

export const asyncInc = (amount) => dispatch => {
  setTimeout(() => dispatch(incremented(amount)), 2000);
};

export default countSlice.reducer;
