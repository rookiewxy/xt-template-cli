
export const processObject = (data, rate) => {
  // debugger
  for (let prop in data) {
      if (data.hasOwnProperty(prop)) {
          
          if (prop === 'fontSize') {
              const fontSize = data['fontSize']
              data['fontSize'] = Number(fontSize) * rate
          }

          let curValue = data[prop]
          
          if (Array.isArray(curValue)) {
              curValue.forEach(item => {
                if (item instanceof Object) {
                  processObject(item, rate)
                }
              })
          } else if (typeof curValue === 'object') {
              processObject(curValue, rate)
          }
      }
  }
  return data
}