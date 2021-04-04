//librarys
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Collapse } from "react-collapse";

//components
import DropdownList from "../components/DropdownList";
import SelectButtons from "../components/SelectButtons";
import SingleButton from "../components/SingleButton";
import Radio from "../components/Radio";
import ShopList from "../components/ShopList";
//import LineChart from "../components/LineChart";

//redux
import { setConditionsActions } from "../reducks/conditions/";
//import initialState from "../reducks/store/initialState";

//file
import purchaseOptions from "../assets/files/purchaseOptions";
import sellAreas from "./../assets/files/sellAreas";
import brandOptions from "../assets/files/brandOptions";
import itemConditonOptions from "../assets/files/itemConditonOptions";
import networkOptions from "../assets/files/networkOptions";
import seriesOptions from "../assets/files/seriesOptions";
import simOptions from "../assets/files/simOptions";
import "../assets/css/Assesment.css";

// const initialGraphData = {
//   labels: [],
//   data: [{ data_type: "", values: [] }],
// };

const Assesment = () => {
  //Component State
  const [shopList, setShopList] = useState({});
  //const [graphData, setGraphData] = useState(initialGraphData);

  //store
  const dispatch = useDispatch();
  const conditions = useSelector((state) => state.conditions);

  //検索ボタン押下イベント
  const clickSearchButton = async () => {
    //バリデーション
    if (conditions.brand === "" || conditions.itemCondition === "" || conditions.volume === "") {
      alert("条件を設定してください");
      return;
    }

    const { data } = await axios.get(
      "https://k828iio6u3.execute-api.ap-northeast-1.amazonaws.com/dev/get_traders_list",
      {
        params: {
          brand: conditions.brand,
          itemCondition: conditions.itemCondition,
          volume: conditions.volume,
          simFreeFlg: conditions.simFree,
          restriction: conditions.restriction,
          sellWay: conditions.sellWay,
        },
      }
    );
    setShopList(data);
  };

  return (
    <div>
      <div className="ui segment" style={{ backgroundColor: "#edebe7" }}>
        <div className="ui form">
          <h3 className="ui dividing header">店舗</h3>
          <SelectButtons
            label={"買取方法"}
            options={purchaseOptions}
            selected={conditions.sellWay}
            onClickButton={(e) =>
              dispatch(setConditionsActions({ ...conditions, sellWay: e.target.value }))
            }
          />
          <Collapse isOpened={conditions.sellWay === "STORE" ? true : false}>
            <DropdownList
              options={sellAreas}
              label={"店舗地域"}
              value={conditions.sellArea}
              onChange={(e) => {
                dispatch(setConditionsActions({ ...conditions, sellArea: e.target.value }));
              }}
            />
          </Collapse>
          <div className="space"></div>
        </div>
        <div className="ui form">
          <h3 className="ui dividing header">診断条件</h3>
          <Radio
            label={"シリーズ"}
            dataset={seriesOptions}
            value={conditions.series}
            onChange={(e) => {
              dispatch(setConditionsActions({ ...conditions, series: "iPhone" }));
              //setGraphData(initialGraphData);
            }}
          />
          <DropdownList
            options={brandOptions.filter((brand) => brand.series === conditions.series)}
            label={"機種"}
            value={conditions.brand}
            onChange={(e) => {
              dispatch(setConditionsActions({ ...conditions, brand: e.target.value }));
            }}
          />
          <DropdownList
            options={itemConditonOptions}
            label={"商品状態"}
            value={conditions.itemCondition}
            onChange={(e) => {
              dispatch(setConditionsActions({ ...conditions, itemCondition: e.target.value }));
            }}
          />
          <DropdownList
            options={brandOptions.find((item) => item.value === conditions.brand).volume}
            label={"容量"}
            value={conditions.volume}
            onChange={(e) => {
              dispatch(setConditionsActions({ ...conditions, volume: e.target.value }));
            }}
          />
          <Radio
            label={"SIMロック解除"}
            dataset={simOptions}
            value={conditions.simFree}
            onChange={(e) => {
              dispatch(setConditionsActions({ ...conditions, simFree: e.target.value }));
            }}
          />
          <Radio
            label={"ネットワーク利用制限"}
            dataset={networkOptions}
            value={conditions.restriction}
            onChange={(e) => {
              dispatch(setConditionsActions({ ...conditions, restriction: e.target.value }));
            }}
          />
          <SingleButton label={"買取検索"} size={"large"} onPress={clickSearchButton} />
        </div>
      </div>
      <div className="space" />
      <Collapse isOpened={Object.keys(shopList).length > 0 ? true : false}>
        {/* <LineChart title={"買取相場推移"} graphData={graphData} /> */}
        <h2 id="test">買取相場</h2>
        <ShopList items={shopList} />
      </Collapse>
    </div>
  );
};

export default Assesment;
