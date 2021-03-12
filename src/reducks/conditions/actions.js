export const SET_CONDITIONS = "SET_CONDITIONS";

export const setConditionsActions = (conditions) => {
  return {
    type: "SET_CONDITIONS",
    payload: {
      ...conditions,
    },
  };
};
