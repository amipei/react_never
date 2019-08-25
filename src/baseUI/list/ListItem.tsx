import React from 'react'
import PropTypes from 'prop-types'

interface ItemProps {
  children: React.ReactNode
  metaData?: any
  onClick?: (metaData: any, e?: any) => void
}

const ListItem: React.FC<ItemProps> = (props) => {
  const {children, metaData, onClick} = props
  const handleClick = (e: any) => {
    if (!onClick) return
    onClick(metaData, e)
  }
  return (
    <li onClick={handleClick}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  metaData: PropTypes.any,
  onClick: PropTypes.func
}

export default ListItem
