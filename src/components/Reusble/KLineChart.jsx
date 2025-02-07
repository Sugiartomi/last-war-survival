import React, { useEffect, useRef, useState } from "react";
import { init, dispose } from "klinecharts";
import generatedKLineDataList from "./generatedKLineDataList";
import Layout from "./Layout";
import "./Kline.less";

function getLanguageOptions(language) {
  return {
    candle: {
      tooltip: {
        labels: language === "en-US" ? ["T: ", "O: ", "C: ", "H: ", "L: ", "V: "] : "",
      },
    },
  };
}
const types = [
  { key: "candle_solid", text: "candle solid" },
  { key: "candle_stroke", text: "candle stroke" },
  { key: "candle_up_stroke", text: "candle up stroke" },
  { key: "candle_down_stroke", text: "candle down stroke" },
  { key: "ohlc", text: "OHLC" },
  { key: "area", text: "area" },
];

function KlineChart() {
  const chart = useRef();
  const [language, setLanguage] = useState("en-US");

  useEffect(() => {
    chart.current = init("real-time-k-line");
    chart.current.applyNewData(generatedKLineDataList());
    return () => {
      dispose("real-time-k-line");
    };
  }, []);

  useEffect(() => {
    chart.current && chart.current.setStyleOptions(getLanguageOptions(language));
  }, [language]);

  return (
    <>
      <div className="">
        <Layout title="图表类型">
          <div id="real-time-k-line" className="k-line-chart" />
          <div className="k-line-chart-menu-container">
            {types.map(({ key, text }) => {
              return (
                <button
                  key={key}
                  onClick={(_) => {
                    chart.current.setStyleOptions({
                      candle: {
                        type: key,
                      },
                    });
                  }}
                >
                  {text}
                </button>
              );
            })}
          </div>
        </Layout>
      </div>
    </>
  );
}

export default KlineChart;
