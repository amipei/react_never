import React, {useEffect} from 'react'
import useScrollBar from '../../common/hook'

import './navbar.scss'
const classNames = require('classnames')

interface NavBarProps {
  leftContent?: React.ReactNode
  leftOnClick?: (e?: any) => void
  children?: React.ReactNode
  rightContent?: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const {leftContent, children,rightContent,leftOnClick} = props
  const [isInTop] = useScrollBar()

  const classPrefix = 'navbar'
  const rootClassName = classNames({
    [`${classPrefix}`]: true,
    [`${classPrefix}--active`]: !isInTop
  })
  return (
    <div className={rootClassName} >
      <div className={`${classPrefix}__left`}
           onClick={leftOnClick}>
        {leftContent}
      </div>
      <div className={`${classPrefix}__middle`}>
        {children}
      </div>
      <div className={`${classPrefix}__right`}>
        {rightContent}
      </div>
    </div>
  )
}

export default NavBar
