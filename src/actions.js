export const actionTypes = {
  ADD_GRUDGE: "ADD_GRUDGE",
  REMOVE_GRUDGE: "REMOVE_GRUDGE",
  TOGGLE_GRUDGE: "TOGGLE_GRUDGE",
};

export const addGrudgeAction = (personName, reason) => ({
  type: actionTypes.ADD_GRUDGE,
  payload: {
    personName,
    reason,
  },
});

export const removeGrudgeAction = (id) => ({
  type: actionTypes.REMOVE_GRUDGE,
  payload: {
    id,
  },
});

export const toggleForgivenessAction = (id) => ({
  type: actionTypes.TOGGLE_GRUDGE,
  payload: {
    id,
  },
});
