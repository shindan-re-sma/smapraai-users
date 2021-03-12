export const SET_SHOP = "SET_SHOP";

export const setShopActions = (shop) => {
  return {
    type: SET_SHOP,
    payload: {
      ...shop,
    },
  };
};
