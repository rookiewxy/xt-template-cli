/*
 * @Description: 绘制图表
 * @Autor: wxy
 * @Date: 2021-07-07 09:48:05
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-07 10:04:17
 */

import * as echarts from "echarts";
import { useEffect, useRef, useCallback } from "react";

type chartsProps = {
  chartsConfig: {
    option: any;
  };
};
const DrawEcharts: React.FC<chartsProps> = (props) => {
  const { chartsConfig } = props;
  const chart = useRef<HTMLDivElement>(null);
  /**
   * @param {*} useCallback
   * @author: wxy
   */
  const initCharts = useCallback(() => {
    if (!chart.current) return;
    const myChart = echarts.init(chart.current);
    myChart.setOption(chartsConfig.option);
  }, [chart,chartsConfig]);

  useEffect(() => {
    initCharts();
  }, [initCharts]);

  return <div id="chart" ref={chart}></div>
};
export default DrawEcharts;
