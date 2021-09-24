import React, {useState, useEffect} from "react";

const useClientSizeRate = () => {
  const [clientSizeRate, setRate] = useState(1)

  useEffect(() =>{
    const resolution = window.innerWidth / window.innerHeight
    const preRes = 1920 / 1080

    console.log(`${window.innerWidth} * ${window.innerHeight}`)
    
    const currentRate = preRes / resolution
    setRate(currentRate)
    return clientSizeRate
  }, [])
}

export default useClientSizeRate