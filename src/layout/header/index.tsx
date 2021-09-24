/*
 * @Description:
 * @Autor: wxy
 * @Date: 2021-04-22 09:29:51
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-21 15:46:31
 */
import { useEffect, useState } from "react";
import "./index.less";
import moment from 'moment'
import { getLiveWeather, getForecastWeather } from '../../api/weather'

const Header = () => {
  const [timeConfig, getTimeConfig] = useState('')


  useEffect(() => {
    const timer = setInterval(() => {
      getTime()
    }, 1000)
  }, [])
  const getTime = () => {
    getTimeConfig(moment().format('HH:mm:ss YYYY/MM/DD'))
  }

  return (
    <>
      <div className="header-content-container f-x j-b">
        {/* TODO 封装成header-left组件 */}
        <div className="header-left">
          <ul className="f-x a-c">
          </ul>
        </div>
        {/* TODO 封装成header-right组件 */}
        <div className="header-right">
          <ul className="f-x a-c">
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
