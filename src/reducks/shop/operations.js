import axios from "axios";

export const fetchPrice = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const conditions = state.conditions;

    const data = await axios.get(
      "https://4vdkwm9ini.execute-api.ap-northeast-1.amazonaws.com/default/re-sma-shindan-diagnosis",
      {
        params: {
          brand: conditions.brand,
          itemCondition: conditions.itemCondition,
          volume: conditions.volume,
          simFreeFlg: conditions.simFree,
          restriction: conditions.restriction,
        },
      }
    );

    dispatch();
  };
};
