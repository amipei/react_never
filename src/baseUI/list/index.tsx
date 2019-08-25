import React from 'react'
import './list.scss'

interface ListProps {
  dataSource: Array<any>
  renderItem: (item: any, key?: any) => React.ReactNode
}
const List: React.FC<ListProps> = (props) => {
  const {dataSource, renderItem} = props
  const classPrefix = 'list'
  return (
    <div className={classPrefix}>
      <ul>
        {dataSource.map(renderItem)}
      </ul>
    </div>
  )
}

export default List