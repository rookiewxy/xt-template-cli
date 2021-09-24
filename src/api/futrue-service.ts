import Axios from "@utils/axios"

// 蜂巢服务-工单信息
export const getOrderInfo = () => {
  return Axios.getAPI({url: '/api/alicockpit/v5/getOrderInfo?communityId=38f258cd-89c7-11ea-bf80-005056b167dc&regionId=eb1e1ad8-85af-42d0-ba3c-21229be19009'})
}

// 蜂巢服务-工单详情
export const getOrderDetail = () => {
  return Axios.getAPI({url: '/api/alicockpit/v5/getOrderInfoTable?communityId=38f258cd-89c7-11ea-bf80-005056b167dc&regionId=eb1e1ad8-85af-42d0-ba3c-21229be19009'})
}

// 蜂巢服务-残疾人信息
// mock
export const getDisabledDetail = (info) => {
  return Axios.getAPI({url: `http://mock.xtspace.cn/mock/611f6c84c5a2c3338053a268/zhoujiaqin/disabled/getByNum?num=${info}`})
}