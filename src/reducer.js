const initialState = { value: 0 };

export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const res = () => ({ type: 'RESET' });

export const asyncInc = () => dispatch => {
  setTimeout(() => dispatch(inc()), 2000);
};

export default function counterReducer(state = initialState, action) {
  if (action.type === 'INC') return { ...state, value: state.value + 1 };
  if (action.type === 'DEC') return { ...state, value: state.value - 1 };
  if (action.type === 'RESET') return { ...state, value: 0 };
  return state;
}
