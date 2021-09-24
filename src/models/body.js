import { types } from "mobx-state-tree"
import { MLeftPage } from "./left-page"

export const MBody = types.model('MBody',{
  // 左侧页面面板
  leftPage: types.optional(MLeftPage, {}),
})
