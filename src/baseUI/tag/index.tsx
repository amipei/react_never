import React from 'react'
import './tag.scss'

interface TagProps {
  metaData: any
  children: React.ReactChild
  onClick?: any
}

const Tag: React.FC<TagProps> = (props) => {
  const { children,  onClick = (d:any)=>{}, metaData } = props
  const classPrefix = "tag"
  console.log(metaData)
  return (
    <span className={classPrefix}
          onClick={() => onClick(metaData)}>
      { children }
    </span>
  )
}

export default Tag
