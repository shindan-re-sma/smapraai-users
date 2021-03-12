import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { push } from "connected-react-router";
import { db, FirebaseTimestamp } from "./../firebase";

//import LineChart from "../components/LineChart";

import introduction from "../assets/imgs/introduction.png";
import smartphone from "../assets/imgs/smartphone.jpg";
import purchaseFlow from "../assets/imgs/purchaseFlow.png";
import * as utils from "./../utils/constants";

import "../assets/css/ApplicationForm.css";

// const initialGraphData = {
//   labels: [],
//   data: [{ data_type: "", values: [] }],
// };

const ApplicationForm = () => {
  //申込者情報
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);
  //const [graphData, setGraphData] = useState(initialGraphData);

  //機種情報
  const dispatch = useDispatch();
  const conditions = useSelector((state) => state.conditions);
  const shop = useSelector((state) => state.shop);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onBlur",
  });

  const onSubmit = async () => {
    //申込情報をDBに登録
    db.collection("users")
      .doc(shop.shopId)
      .collection("orders")
      .add({
        address: address,
        brand: conditions.brand,
        condition: conditions.itemCondition,
        createdAt: FirebaseTimestamp.now(),
        email: email,
        status: "New",
        message: message,
        minPrice: shop.minPrice,
        maxPrice: shop.maxPrice,
        name: name,
        restriction: conditions.restriction,
        prefecture: prefecture,
        shopId: shop.shopId,
        shopName: shop.name,
        simFree: conditions.simFree,
        tel: tel,
        updatedAt: FirebaseTimestamp.now(),
        volume: conditions.volume,
        zipcode: zipcode,
      })
      .then((snapshot) => {
        const params = {
          to: email,
          address: prefecture + " " + address,
          customerName: name,
          email: email,
          message: message,
          maxPrice: shop.maxPrice.toLocaleString(),
          minPrice: shop.minPrice.toLocaleString(),
          orderId: snapshot.id,
          shopMailTemplate: "店舗によって異なる文章をいれる",
          shopName: shop.name,
          tel: tel,
          zipcode: zipcode,
        };
        //メール送信
        axios
          .post(utils.sendMailApiUrl, params, {
            headers: { "Content-Type": "multipart/form-data; charset=UTF-8" },
          })
          .catch((error) => {
            alert("申し込みに失敗しました。時間をあけて再度お願いします。");
            console.log(error);
          });
        alert("申し込みが完了しました。");
        dispatch(push("/"));
      })
      .catch(() => alert("申し込みに失敗しました。時間をあけて再度お願いします。"));
  };

  return (
    <div className="application-form">
      <div className="line-chart">
        {/* <h1>{shop.name}の買取相場推移</h1>
        <LineChart title={""} graphData={graphData} />
        <p>※実装は実際価格、破線は予測価格を表示</p> */}
      </div>
      <div className="introduction">
        <h1>{shop.name}の店舗買取</h1>
        <img alt="紹介画像" src={introduction} />
      </div>
      <div className="purchase-flow">
        <h1>買取までのご利用の流れ</h1>
        <p>買取を申し込むには以下の流れで買取依頼してください</p>
        <img alt="買取の流れ" src={purchaseFlow} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="ui segment">
        <h1 style={{ textAlign: "center" }}>買取申し込み</h1>
        <p>必要項目を入力し買取申込を行ってください。</p>
        <div className="ui items" style={{ border: "solid 1px", borderRadius: "1rem" }}>
          <div className="item" style={{ padding: "1rem" }}>
            <div className="ui small image">
              <img alt="スマホ画像" src={smartphone} />
            </div>
            <div className="content">
              <p>
                <b>機種：</b>
                <span>{conditions.brand}</span>
              </p>
              <p>
                <b>状態：</b>
                <span>{utils.itemConditions[conditions.itemCondition]}</span>
              </p>
              <p>
                <b>容量：</b>
                <span>{conditions.volume}</span>
              </p>
              <p>
                <b>SIMロック解除：</b>
                <span>{utils.sim[conditions.simFree]}</span>
              </p>
              <p>
                <b>ネットワーク利用制限：</b>
                <span>{utils.network[conditions.restriction]}</span>
              </p>
            </div>
            <div className="content" id="price-range">
              <p>買取価格</p>
              <div>
                <p>
                  {shop.minPrice.toLocaleString()}
                  <span className="en">円</span>
                </p>
                <span className="from-to">～</span>
                <p>
                  {shop.maxPrice.toLocaleString()}
                  <span className="en">円</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ui form">
          <div className="required field">
            <label>{"お名前"}</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ref={register({
                    required: "入力してください",
                  })}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>
            </div>
          </div>
          <div className="required field">
            <label>{"メールアドレス"}</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={register({
                    required: "入力してください",
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
            </div>
          </div>
          <div className="required field">
            <label>{"電話番号"}</label>
            <div className="fields">
              <div className="eight wide field">
                <input
                  type="tel"
                  name="tel"
                  autoComplete="tel"
                  placeholder="Tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  ref={register({
                    required: "入力してください",
                    pattern: { value: /^[0-9]+$/i, message: "ハイフンを含めずに入力してください" },
                  })}
                />
                {errors.tel && <span className="error-message">{errors.tel.message}</span>}
              </div>
            </div>
          </div>
          <div className="required field">
            <label>{"郵便番号"}</label>
            <div className="eight fields">
              <div className="field">
                <input
                  type="tel"
                  name="zipcode"
                  autoComplete="postal-code"
                  placeholder="xxx○○○○"
                  maxLength="7"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  ref={register({
                    required: "入力してください",
                    minLength: { value: 7, message: "7桁で入力してください" },
                    maxLength: { value: 7, message: "7桁で入力してください" },
                    pattern: { value: /^[0-9]+$/i, message: "ハイフンを含めずに入力してください" },
                  })}
                />
              </div>
            </div>
            {errors.zipcode && <span className="error-message">{errors.zipcode.message}</span>}
          </div>
          <div className="fields">
            <div className="required two wide field">
              <label>{"都道府県"}</label>
              <input
                type="text"
                name="prefecture"
                autoComplete="address-level1"
                placeholder="Prefecture"
                value={prefecture}
                onChange={(e) => setPrefecture(e.target.value)}
                ref={register({
                  required: "入力してください",
                })}
              />
              {errors.prefecture && (
                <span className="error-message">{errors.prefecture.message}</span>
              )}
            </div>
            <div className="required twelve wide field">
              <label>{"市区町村番地・マンション名"}</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                ref={register({
                  required: "入力してください",
                })}
              />
              {errors.address && <span className="error-message">{errors.address.message}</span>}
            </div>
          </div>
          <div className="field">
            <label>{"申し送り事項"}</label>
            <textarea
              rows="4"
              value={message}
              placeholder={"例）\n画面真ん中に傷があり\nカメラレンズに傷があり"}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="required field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                name="agreement"
                tabIndex="1"
                checked={agreement ? "checked" : ""}
                onChange={() => setAgreement(!agreement)}
                ref={register({
                  required: "申し込みには同意が必要です",
                })}
              />
              <label>
                <a
                  href="https://smapra.com/privacypolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ color: "blue" }}>個人情報の取り扱いに同意する</span>
                </a>
              </label>
            </div>
          </div>
          {errors.agreement && <span className="error-message">{errors.agreement.message}</span>}
          <div className="space" />
          <button className="fluid ui primary button">送信</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
