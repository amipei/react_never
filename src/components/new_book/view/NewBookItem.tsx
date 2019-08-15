import React from 'react'
import PropTypes from 'prop-types'
import {apikey} from "../../../token"
import {Link} from "react-router-dom"

interface NewBookItemProps {
  classPrefix: string
  item: {
    [index:string]: any
  },
  index: number | string
}

const NewBookItem: React.FC<NewBookItemProps> = props => {
  const {classPrefix, item , index} = props

  return (
    <Link to={`/details/${item.isbn13}`} className={`${classPrefix}__item`}>
      <div className={`${classPrefix}__img-wrap`}>
        <img className={`${classPrefix}__img`} src={`${item.image}?apikey=${apikey}`}/>
      </div>
      <h3 className={`${classPrefix}__title`}>{item.title}</h3>
      <span className={`${classPrefix}__author`}>{item.author}</span>
    </Link>
  )
}

NewBookItem.propTypes = {
  classPrefix: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
}

export default NewBookItem