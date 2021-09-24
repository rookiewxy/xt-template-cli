// 判断是否在数组内
export default function (item, array) {
  if (Array.isArray(array)) {
    return array.findIndex(i => i === item) !== -1 ? true : false
  }
}