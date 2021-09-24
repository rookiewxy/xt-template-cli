import random from './random'
import isDef from './is-def'

const createEvent = (privateName = '') => {
  const id = `_event-${privateName}-${random()}`
  const rename = name => `${id}-${name}`
  let cache = {}

  const event = {
    on(name, fn, remark) {
      if (typeof name === 'string' && typeof fn === 'function') {
        const prefixedName = rename(name)
        cache[prefixedName] = cache[prefixedName] || []
        fn.remark = remark
        cache[prefixedName].push(fn)
      }
    },
    once(name, fn, remark) {
      if (typeof name === 'string' && typeof fn === 'function') {
        const prefixedName = rename(name)
        cache[prefixedName] = cache[prefixedName] || []
        fn.remark = remark
        fn.isOnceDone = false
        cache[prefixedName].push(fn)
      }
    },
    off(name, fn) {
      const prefixedName = rename(name)
      if (!fn) {
        delete cache[prefixedName]
      }
      else {
        const fns = cache[prefixedName] || []
        fns.splice(fns.indexof(fn), 1)
        if (!fns.length) {
          delete cache[prefixedName]
        }
      }
    },
    fire(name, args, context) {
      const fns = cache[rename(name)]
      if (fns) {
        let fn 
        for (let i = 0; i< fns.length; i++) {
          fn = fns[i]
          if (!isDef(fn.isOnceDone)) {
            fn.apply(context || null, [].concat(args))
          }
          else if (fn.isOnceDone === false) {
            console.log(args)
            console.log([].concat(args))
            fn.apply(context || null, [].concat(args))
            fn.isOnceDone = true
          }
          else if (fn.isOnceDone === true) {
            // 
          }
        }
      }
    }, 
    has (name) {
      return !!cache[rename[name]]
    },
    clear() {
      cache = []
    },
  }
  return event
}
export default createEvent

