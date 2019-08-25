import React from 'react'
import {FiArrowLeft} from "react-icons/fi"
import {Dividers, IconWrap, NavBar} from "../../../baseUI"
import {Interest, Summary} from "../components"
import {Status} from "../redux/reducer"
import {useDetailsState} from "./hook"
import './details.scss'

const Details: React.FC = (props: any) => {
  const classPrefix = 'details'
  const {isbn} = props.match.params
  const {state, setDetailsState} = useDetailsState(isbn)
  // @ts-ignore
  const {status, result} = state
  if (state.status === Status.LOADING) return null
  if (state.status === Status.FAILURE) return null
  return (
    <div className="details">
      <div style={{height: '56px'}}>
			<NavBar leftContent={<IconWrap icon={<FiArrowLeft/>} style={{marginLeft: '-12px'}}/>}
							leftOnClick={()=>props.history.goBack()} />
      </div>
      {/*书籍信息*/}
      <div className={`${classPrefix}__info`}>
        <div className={`${classPrefix}__img-wrap`}>
          <img className={`${classPrefix}__img`}
               src={result.image}
               alt={result.alt}/>
        </div>
        <div className={`${classPrefix}__description`}>
          <h2 className={`${classPrefix}__title`}>{result.title}</h2>
          <span className={`${classPrefix}__author`}>作者：{result.author}</span>
          <span className={`${classPrefix}__author-intro`}> {result.author_intro}</span>
        </div>
      </div>
      <Dividers/>
      {/*操作/interest*/}
      <Interest />
      <Dividers/>
      {/*内容简介*/}
      <Summary data={result.summary}/>
      {/*查看目录TODO*/}
    </div>
  )
}

export default Details