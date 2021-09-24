import React, {Children, useState} from 'react'
import c from 'classnames'
import './page-icon.less'
import Icon from 'components/icon'

const PageIcon = ({defaultState = false, fill="#c9c9c9",
  iconName = "show-sence", activeIconName = "show-sence-active", onChange}) => {
  
    const [isActive, setAcitve] = useState(defaultState)

  const handleClick = () => {
    setAcitve(!isActive)
    onChange(isActive)
  }

  return (
    <div onClick={handleClick}>
      {
        isActive && <div className={c('page-btn active')}>
          <Icon name={activeIconName} size={50}/>
        </div>
      }
      {
        !isActive && <div className={c('page-btn')}>
          <Icon name={iconName} size={50} fill={fill}/>
        </div>
      }
    </div>
  )
}
export const PageIconGroup = ({btnConfig = [{iconName: '', activeIconName: ''}], 
fill="#c9c9c9", activeIcon = '', handleClick, size = 50}) => {
  
  return (
    <div className={c('fbv')}>
      {
        btnConfig.map(item => Children.toArray(
          <div onClick={() => { handleClick(item.iconName) }} title={item.title}>
            <Icon 
            name={activeIcon === item.iconName ? item.activeIconName : item.iconName} 
            size={size} 
            fill={activeIcon === item.iconName ? '#fff' : fill} 
          />
          </div>
          
        ))
      }
    </div>
  )
}
export default PageIcon
