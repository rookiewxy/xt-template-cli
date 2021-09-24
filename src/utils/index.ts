/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2021-07-03 09:21:15
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-03 09:50:22
 */
import Weather from './enum/weather'

// 函数用于获取鼠标的位置
export const getMouseXY = (e:React.MouseEvent<HTMLDivElement>) => {
  let x = 0, y = 0
  
  if (e.pageX) {
    x = e.pageX
    y = e.pageY
  } else {
    x = e.clientX + document.body.scrollLeft - document.body.clientLeft
    y = e.clientY + document.body.scrollTop - document.body.clientTop
  }
  return {
    x: x,
    y: y
  }
}

/**
 * 高德天气接口
 */
export const getGaodeWeather = (weatherText: string) => {
  let code = Weather.CLEAR_SKIES
  if(weatherText?.indexOf('霾') >= 0 || weatherText?.indexOf('雾') >= 0) {
    code = Weather.FOGGY
  }
  if(weatherText?.indexOf('小雨') >= 0 || weatherText?.indexOf('阵雨') >= 0 || weatherText?.indexOf('中雨') >= 0) {
    code = Weather.RAIN
  }
  if(weatherText?.indexOf('暴雨') >= 0 || weatherText?.indexOf('大雨') >= 0) {
    code = Weather.THUNDERSTORM
  }
  if(weatherText?.indexOf('雪') >= 0 || weatherText?.indexOf('阵雪') >= 0 || weatherText?.indexOf('小雪') >= 0) {
    code = Weather.LIGHT_SNOW
  }
  if(weatherText?.indexOf('中雪') >= 0 || weatherText?.indexOf('大雪') >= 0 || weatherText?.indexOf('暴雪') >= 0) {
    code = Weather.SNOW
  }
  return code
}