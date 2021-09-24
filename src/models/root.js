import {types} from 'mobx-state-tree'
import {MBody} from './body'
import { MBottom } from './bottom'

const MRoot = types.model('MRoot', {
  // 主体区域
  body: types.optional(MBody, {}),
  // 底部按钮区域
  bottom: types.optional(MBottom, {}),
})

export default MRoot