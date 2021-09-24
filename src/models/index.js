import MRoot from "./root"
import globalEvent from "@utils/global-event"

const root = MRoot.create({}, {
  globalEvent,
})

window.root = root
export default root