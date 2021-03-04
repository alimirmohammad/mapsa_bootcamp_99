export default function counterReducer(state, action) {
  if (action === 'INC') return state + 1;
  if (action === 'DEC') return state - 1;
  if (action === 'RESET') return 0;
  throw new Error('UNKNOWN ACTION');
}
