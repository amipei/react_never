import React from 'react'
import './load_icon.scss'

interface LoadIconProps {
  style: object
}

const LoadIcon: React.FC<LoadIconProps> = ({style}) => {
  const classPrefix = 'load-icon'
  return (
    <div className={classPrefix} style={style}>
      <div className={`${classPrefix}__circle`}>
        <div className={`${classPrefix}__arc`}></div>
      </div>
    </div>
  )
}

export default LoadIcon