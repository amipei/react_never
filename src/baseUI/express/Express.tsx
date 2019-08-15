import React from 'react'
import PropTypes from 'prop-types'
import Header from "../header/Header"
import {Link} from "react-router-dom"
import './express.scss'
interface ExpressProps {
  title: string
  to: string
  data: any
  renderItem:any
}

const Express: React.FC<ExpressProps> = (props) => {
  const {title, data,renderItem} = props
  const classPrefix = 'express'
  return (
    <div className={classPrefix}>
      <Header title={title} extra={<Link to='/'>查看全部</Link>} />
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