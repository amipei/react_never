import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {ImgWrap,List, ListItem} from "../index"
import BottomLoad from "../bottom_load"
import './details_list.scss'

const style = {
  flex: 'none',
  width: '72px',
  height: '106px',
  borderRadius: '4px',
  overflow: 'hidden'
}
interface DetailsListProps {
  dataSource: any
  loadCallBack?: any
}
const DetailsList: React.FC<DetailsListProps> = (props) => {
  const {dataSource, loadCallBack} = props
  if (dataSource === null || dataSource === undefined) return null
  const {start, count, total, books} = dataSource
  const checkLoad = () => {
    if (start + count < total) {
      loadCallBack(start+count)
    }
  }

  const classPrefix = 'details-list'
  return (
    <div className={classPrefix}>
    {/* 列表*/}
      <List dataSource={dataSource.books} renderItem={((item, i) => (
        <ListItem  key={item.isbn13 + i}>
          <Link className={`${classPrefix}__wrap`} to={`/details/${item.isbn13}`}>
            <ImgWrap style={style} src={item.images.small} alt={item.alt} />
            <div className={`${classPrefix}__info`}>
              <h3 className={`${classPrefix}__title`}>{item.title}</h3>
              {item.subtitle ? <h4 className={`${classPrefix}__subtitle`}> {item.subtitle}</h4> : null}
              <span className={`${classPrefix}__other`}>
                {item.rating.average} / {item.author} / {item.pubdate} / {item.publisher}
              </span>
            </div>
          </Link>
        </ListItem>
      ))}/>
    {/*  TODO更多   */}
      {start + count >= total
        ? <div>The End</div>
        : <BottomLoad loadCallBack={checkLoad}/>
      }
    </div>
  )
}

export default DetailsList