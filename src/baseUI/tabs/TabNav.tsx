import React from 'react'
import { Link } from 'react-router-dom';



const TabNav: React.FC<any> = (props: any) => {
  const { classPrefix, panels } = props

  const getTabs = () => {
    return React.Children.map(panels, (child) => {
      if (!child) return
      let path = child.props.path
      let Tab = child.props.tab
      return (
        <Link to={path} className={`${classPrefix}__tab`}>
          <Tab />
        </Link>
      )
    })
  }
  return (
    <nav className={`${classPrefix}__nav`}>
      <div className={`${classPrefix}__bar`}>
        {getTabs()}
      </div>
    </nav>
  )
}

export default TabNav;
