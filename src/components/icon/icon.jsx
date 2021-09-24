import React from 'react'
import c from 'classnames'

const Icon = ({
  name, size = 16, fill = '#ffffff', opacity = 1,
}) => (
  <svg width={size} style={{opacity}} height={size} fill={fill}>
    <use xlinkHref={`#${name}`} />
  </svg>
)

export default Icon
