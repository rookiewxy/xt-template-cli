// 用来判断是否是一个有效的值

export default function isDef(v) {
  return v !== undefined && v !== null
}