import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchDetails} from "../redux/actions"
import {Link} from "react-router-dom"
import {FiArrowLeft, FiBookOpen, FiChevronRight, FiHeart, FiShare2} from "react-icons/fi"

import Summary from "../components/summary/Summary"
import './details.scss'
import Dividers from "../../../baseUI/dividers/Dividers"
import Interest from "../components/interest/Interest"

const Details: React.FC = (props: any) => {
  const {match} = props
  const {isbn} = match.params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDetails(isbn))
  }, [dispatch])
  // @ts-ignore
  const state = useSelector(state => state.details)
  console.log(state)
  const classPrefix = 'details'
  return (
    <div className="details">
      <nav className="details__nav">
        <Link to="/" className="details__link">
          <FiArrowLeft/>
        </Link>
      </nav>
      {/*书籍信息*/}
      <div className={`${classPrefix}__info`}>
        <div className={`${classPrefix}__img-wrap`}>
          <img className={`${classPrefix}__img`}
               src={state.image}
               alt={state.alt}/>
        </div>
        <div className={`${classPrefix}__description`}>
          <h2 className={`${classPrefix}__title`}>{state.title}</h2>
          <span className={`${classPrefix}__author`}>作者：{state.author}</span>
          <span className={`${classPrefix}__author-intro`}> {state.author_intro}</span>
        </div>
      </div>
      <Dividers/>
      {/*操作/interest*/}
      <Interest/>
      <Dividers/>
      {/*内容简介*/}
      <Summary data={state.summary}/>
      {/*查看目录TODO*/}
    </div>
  )
}

export default Details