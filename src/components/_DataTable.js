import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import freamarkets from "../assets/files/freamarkets";
import itemConditionOptions from "../assets/files/itemConditonOptions";
import "../assets/css/DataTable.css";

const Rows = ({ brand, itemCondition, volume, simFree, restriction }) => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTableData = async () => {
      const { data } = await axios.get(
        "https://4vdkwm9ini.execute-api.ap-northeast-1.amazonaws.com/default/shindan_select_details",
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
      setRows(data);
      setIsLoading(false);
    };

    fetchTableData();

    return () => {
      setIsLoading(true);
    };
  }, [brand, itemCondition, volume, simFree, restriction]);

  const renderdSpan = (value) => {
    if (value) {
      return (
        <div className="ui label">
          <span>{value}</span>
        </div>
      );
    } else {
      return;
    }
  };

  const renderedRows = rows.map((row) => {
    const displayPrice = row.price.toLocaleString();

    return (
      <tr key={row.url}>
        <td>
          <a
            href={row.url}
            className={`${freamarkets[row.data_type].style}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {freamarkets[row.data_type].label}
          </a>
        </td>
        <td>{row.sales_date}</td>
        <td>
          <a href={row.url} target="_blank" rel="noopener noreferrer">
            {row.title}
          </a>
        </td>
        <td>{row.brand}</td>
        <td>
          {
            itemConditionOptions.find((item) => {
              return Number(item.value) === Number(row.item_condition);
            }).label
          }
        </td>
        <td>{displayPrice}</td>
        <td>
          {renderdSpan(row.sim_free_flg ? "SIMフリー" : null)}
          {renderdSpan(row.volume)}
          {renderdSpan(row.restriction)}
        </td>
        <td>{row.sold_flg ? "売切" : "出品中"}</td>
      </tr>
    );
  });

  const renderdContent = () => {
    return (
      <div>
        <table className="ui fixed single line table">
          <thead className="center aligned">
            <tr>
              <th style={{ width: "90px" }}>フリマ</th>
              <th style={{ width: "110px" }}>日付</th>
              <th>タイトル</th>
              <th style={{ width: "120px" }}>機種</th>
              <th style={{ width: "160px" }}>商品状態</th>
              <th style={{ width: "80px" }}>価格</th>
              <th style={{ width: "200px" }}>特徴</th>
              <th style={{ width: "80px" }}>販売状況</th>
            </tr>
          </thead>
          <tbody className="center aligned">{renderedRows}</tbody>
        </table>
      </div>
    );
  };

  if (isLoading) {
    return <Loading>{renderdContent()}</Loading>;
  } else {
    return <>{renderdContent()}</>;
  }
};

export default Rows;
