/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2021-07-03 18:28:34
 * @LastEditors: ljw
 * @LastEditTime: 2021-08-23 11:29:03
 */
import * as echarts from "echarts";
import { useEffect, useRef, useCallback } from "react";

type PieProps = {
  pieConfig: {
    text: string;
    subText: string;
    colorArr?:string[]
    value?: number
  };
};
export default function Index(props: PieProps) {
  const {pieConfig} = props
  const chart = useRef<HTMLDivElement>(null);
  /**
   * @param {*} useCallback
   * @author: wxy
   */
   const initCharts = useCallback(() => {
    if (!chart.current) return;
    const myChart = echarts.init(chart.current);
    myChart.setOption({
      title: {
        text: pieConfig.text,
        textStyle: {
          color: '#ffffff',
          fontSize: 20
        },
        subtext: pieConfig.subText,
        subtextStyle: {
          color: '#ffffff',
          fontSize:14
        },
        itemGap: 10, // 主副标题距离
        left: 'center',
        top: '36%'
      },
      angleAxis: {
        max: 100, // 满分
        clockwise: true, // 逆时针
          // 隐藏刻度线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      radiusAxis: {
        type: 'category',
          // 隐藏刻度线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: ['58%','74%'] //图形大小
      },
      series: [{
        type: 'bar',
        data: [{
          name: pieConfig.subText,
          value: pieConfig.value,
          itemStyle: {
            shadowBlur: 7,
            normal: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: pieConfig.colorArr?.[0]||"rgba(255, 185, 64, .3)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: pieConfig.colorArr?.[1]||"rgba(255, 185, 64, 1)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
          },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15,
        barGap: '-100%', // 两环重叠
        z: 2,
      },{ // 灰色环
          type: 'bar',
          data: [{
            value: 100,
            itemStyle: {
              color: 'rgba(255, 185, 64, 0.5)',
              shadowColor: 'rgba(1, 0, 0, 0.2)',
              shadowBlur: 7,
              shadowOffsetY: 2
            }
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barGap: '-100%', // 两环重叠
          z: 1
      }]
  });
  }, [chart, pieConfig]);

  useEffect(() => {
    initCharts();
  }, [initCharts]);

  return (
      <div id="chart" ref={chart}></div>
  )
}
