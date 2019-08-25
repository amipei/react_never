import React from 'react'
import {Link} from "react-router-dom"
import {Header} from "../index"
import './express.scss'

interface ExpressProps {
  title: string
  to: string
  data: any
  renderItem:any
}

const Express: React.FC<ExpressProps> = (props) => {
  const {title, data, renderItem, to} = props
  const classPrefix = 'express'
  return (
    <div className={classPrefix}>
      <Header title={title} extra={<Link to={to}>查看全部</Link>} />
      <div className={`${classPrefix}__content`}>
        {data.map((item:any, i:any) => {
          if (i > 5) return null
          return renderItem(item, i)
        })}
      </div>
    </div>
  )
}

Express.propTypes = {

}

export default Express