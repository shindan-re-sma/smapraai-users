import React from "react";
import "../assets/css/ShopList.css";
import ShopItem from "./ShopItem";

const ShopList = (props) => {
  const ShopItems = Object.keys(props.items).map((key) => {
    let shopLabel = "";
    if (props.items[key].store_purchase_flg) {
      shopLabel += "店舗／";
    }

    if (props.items[key].delivery_purchase_flg) {
      shopLabel += "宅配／";
    }

    if (props.items[key].trip_purchase_flg) {
      shopLabel += "出張／";
    }

    shopLabel = shopLabel.slice(0, -1);

    return (
      <ShopItem
        key={key}
        shopId={props.items[key].shopId}
        name={props.items[key].trader_name}
        shopLabel={shopLabel}
        description={props.items[key].description}
        minPrice={props.items[key].min_price}
        maxPrice={props.items[key].max_price}
      />
    );
  });

  return <div>{ShopItems}</div>;
};

export default ShopList;
