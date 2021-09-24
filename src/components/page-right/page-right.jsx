import React, { useEffect, useLayoutEffect, useState } from 'react'
import c from 'classnames'
import './page-right.less'

const PageRight = ({children}) => {

  const [rate, setRate] = useState(0)
  const [lazyLoad, setLazyLoad] = useState(false)

  useEffect(() =>{
    const resolution = window.innerWidth / window.innerHeight
    const preRes = 1920 / 1080
    const currentRate = preRes / resolution
    
    setRate(currentRate)
  }, [children])

  useLayoutEffect(() => {
    setLazyLoad(true)
  }, [])

  return(
    <>
    {
      lazyLoad && <div style={{transform: `scale(${rate}) translate(0px)`}} className={c('auto-page-right')}>
        {children}
      </div> 
    }
    </>
  )
}

export default PageRight
