import axios from 'axios'

interface IOption {
  url: string
  method?: any
}
export default class Axios {
  static getWeather(option: IOption) {
    return new Promise((resolve, rej) => {
      axios({
        url: option.url,
        method: option.method
      })
      .then(response => {
        if (response.status === 200) {
          let res = response.data
          resolve(res)
        }
        else{
          console.log(response, '错误信息')
        }
      })
      .catch(e => {
        console.log(e, 'AIXOS ERROR')
      })
    })
  }
  
  static getAPI(option: IOption) {
    return new Promise((resolve, rej) => {
      axios({
        url: option.url,
        method: option.method
      })
      .then(response => {
        if (response.status === 200) {
          let res = response.data
          resolve(res)
        }
        else{
          console.log(response, '错误信息')
        }
      })
      .catch(e => {
        console.log(e, 'AIXOS ERROR')
      })
    })
  }
}