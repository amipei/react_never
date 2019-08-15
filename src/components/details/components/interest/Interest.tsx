import React from 'react'
import {FiBookOpen, FiHeart, FiShare2} from "react-icons/fi"
import './interest.scss'

const Interest = () => {
  const classPrefix = 'interest'
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}__item`}>
        <span className={`${classPrefix}__icon`}><FiHeart/></span>
        <span>喜欢</span>
      </div>
      <div className={`${classPrefix}__item`}>
        <span className={`${classPrefix}__icon`}><FiShare2/></span>
        <span>分享</span>
      </div>
      <div className={`${classPrefix}__item`}>
        <span className={`${classPrefix}__icon`}><FiBookOpen/></span>
        <span>在看</span>
      </div>
    </div>
  )
}

Interest.propTypes = {}

export default Interest