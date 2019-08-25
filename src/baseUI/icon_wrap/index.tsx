import React from 'react'
import PropTypes from 'prop-types'
import './icon_wrap.scss'

interface IconWrapProps {
  className?: string
  icon: React.ReactNode
  style?: object
  onClick?: (e:any) => void
}

const IconWrap: React.FC<IconWrapProps> = ({className, icon, ...other}) => (
  <span className={`icon-wrap ${className}`} {...other}>
    {icon}
  </span>
)

IconWrap.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func
}

export default IconWrap