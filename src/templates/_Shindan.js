import React, { useState, useEffect } from "react";
import axios from "axios";

import Selection from "../components/Selection";
import Radio from "../components/Radio";
import Arrow from "../components/Arrow";
import Count from "../components/Count";
import LineChart from "../components/LineChart";
import DataTable from "../components/DataTable";

import brandOptions from "../assets/files/brandOptions";
import itemConditonOptions from "../assets/files/itemConditonOptions";
import "../assets/css/Shindan.css";

const initialState = {
  type: "iPhone",
  brand: "",
  itemCondition: "",
  volume: "",
  simFree: "0",
  restriction: "○",
};

const initialMarketValue = {
  current: {
    start: 0,
    end: 0,
  },
  afterOne: {
    start: 0,
    end: 0,
  },
  afterTwo: {
    start: 0,
    end: 0,
  },
  assesed: {
    start: 0,
    end: 0,
  },
};

const initialGraphData = {
  labels: [],
  data: [{ data_type: "", values: [] }],
};

const Shindan = () => {
  //診断条件
  const [type, setType] = useState(initialState.type);
  const [brand, setBrand] = useState(initialState.brand);
  const [itemCondition, setItemCondition] = useState(initialState.itemCondition);
  const [volume, setVolume] = useState(initialState.volume);
  const [simFree, setSimFree] = useState(initialState.simFree);
  const [restriction, setRestriction] = useState(initialState.restriction);

  //推定相場
  const [marketValue, setMarketValue] = useState(initialMarketValue);
  const [graphData, setGraphData] = useState(initialGraphData);

  useEffect(() => {
    const fetchMarketValues = async () => {
      const { data } = await axios.get(
        "https://4vdkwm9ini.execute-api.ap-northeast-1.amazonaws.com/default/re-sma-shindan-diagnosis",
        {
          params: {
            brand: brand,
            itemCondition: itemCondition,
            volume: volume,
            simFreeFlg: simFree,
            restriction: restriction,
          },
        }
      );

      setMarketValue((prev) => {
        return {
          current: {
            start: prev.current.end,
            end: data.results[0],
          },
          afterOne: {
            start: prev.afterOne.end,
            end: data.results[1],
          },
          afterTwo: {
            start: prev.afterTwo.end,
            end: data.results[2],
          },
          assesed: {
            start: prev.assesed.end,
            end: data.results[3],
          },
        };
      });
      setGraphData({ ...data.graph });
    };
    if (brand !== "") {
      fetchMarketValues();
    }
  }, [type, brand, itemCondition, volume, simFree, restriction]);

  return (
    <div>
      <div className="ui segment" style={{ backgroundColor: "#edebe7" }}>
        <div className="ui form">
          <h4 className="ui dividing header">診断条件</h4>
          <Radio
            label={"シリーズ"}
            dataset={[
              {
                label: "iPhone",
                value: "iPhone",
              },
              {
                label: "Android",
                value: "Android",
              },
              {
                label: "Huawei",
                value: "Huawei",
              },
            ]}
            value={type}
            onChange={(e) => {
              setBrand(initialState.brand);
              setItemCondition(initialState.itemCondition);
              setVolume(initialState.volume);
              setSimFree(initialState.simFree);
              setRestriction(initialState.restriction);
              setMarketValue(initialMarketValue);
              setGraphData(initialGraphData);
              setType(e.target.value);
            }}
          />
          <Selection
            options={brandOptions.filter((brand) => brand.type === type)}
            label={"機種"}
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          />
          <Selection
            options={itemConditonOptions}
            label={"商品状態"}
            value={itemCondition}
            onChange={(e) => setItemCondition(e.target.value)}
          />
          <Selection
            options={brandOptions.find((item) => item.value === brand).volume}
            label={"容量"}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          <Radio
            label={"SIMロック解除"}
            dataset={[
              {
                label: "解除していない",
                value: "0",
              },
              {
                label: "解除済",
                value: "1",
              },
            ]}
            value={simFree}
            onChange={(e) => setSimFree(e.target.value)}
          />
          <Radio
            label={"ネットワーク利用制限"}
            dataset={[
              {
                label: "完済済み",
                value: "○",
              },
              {
                label: "分割支払い中",
                value: "▲",
              },
            ]}
            value={restriction}
            onChange={(e) => setRestriction(e.target.value)}
          />
        </div>
      </div>
      <div className="header-center">
        <p>フリマアプリでの推定相場</p>
      </div>
      <div className="ui orange message">
        <Count
          label={"現在の相場"}
          start={marketValue.current.start}
          end={marketValue.current.end}
        />
        <Count
          label={"1か月後の相場"}
          start={marketValue.afterOne.start}
          end={marketValue.afterOne.end}
        />
        <Count
          label={"2か月後の相場"}
          start={marketValue.afterTwo.start}
          end={marketValue.afterTwo.end}
        />
      </div>
      <div className="space" />
      <div className="header-center">
        <p>今すぐ現金買取するなら</p>
      </div>
      <div className="ui orange message ">
        <p className="header" style={{ textAlign: "center" }}></p>
        <Count
          label={"現在の買取価格"}
          start={marketValue.assesed.start}
          end={marketValue.assesed.end}
        />
        <div>
          <a
            className="btn-gradient-radius"
            href="https://smaho-shindan.studio.site/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            買取を申し込む
          </a>
        </div>
      </div>
      <div className="space" />
      <LineChart graphData={graphData} />
      <p style={{ margin: "5px 0px 0px 50px" }}>※実線は実際価格、破線は予測価格を表示</p>
      <div className="space" />
      <h4 className="header">同じ条件で取引されている他のスマホをチェックしよう</h4>
      <DataTable
        brand={brand}
        itemCondition={itemCondition}
        volume={volume}
        simFree={simFree}
        restriction={restriction}
      />
    </div>
  );
};

export default Shindan;
