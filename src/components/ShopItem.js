import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

//redux
import { setShopActions } from "../reducks/shop";

import "../assets/css/ShopItem.css";

const ShopItem = (props) => {
  const dispatch = useDispatch();

  const onClickItem = () => {
    dispatch(
      setShopActions({
        shopId: "KjaiGizi9vgI1oJJj8p94pDLKEt2", //変える
        name: props.name,
        minPrice: props.minPrice,
        maxPrice: props.maxPrice,
      })
    );

    if (props.name === "イオシス") {
      window.open("https://k-tai-iosys.com/");
    } else {
      dispatch(push("/form"));
    }
  };

  return (
    <div className="item-container">
      <a className="item" onClick={onClickItem}>
        <div className="shop-info">
          {props.name}
          <p className="purcase-type">{props.shopLabel}</p>
          <p className="description">{props.description}</p>
        </div>
        <div className="price-info">
          <div className="recent-price">
            <p>
              {props.minPrice.toLocaleString()}
              <span className="en">円</span>
            </p>
            <span className="from-to">～</span>
            <p>
              {props.maxPrice.toLocaleString()}
              <span className="en">円</span>
            </p>
          </div>
        </div>
        <div className="arrow-icon">
          <i className="grey large chevron right link icon"></i>
        </div>
      </a>
    </div>
  );
};

export default ShopItem;
