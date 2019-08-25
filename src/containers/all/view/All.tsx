import React from 'react'
import {FiArrowLeft} from "react-icons/fi"
import {DetailsList, IconWrap, NavBar} from "../../../baseUI"
import {usePagingNewBook} from "../../new_book/view/hook"

const All = (props: any) => {
  const {match} = props
  const type = match.params.type
  const [newBook, loadNewBookData] = usePagingNewBook()
  let tempState
  switch (type) {
    case 'newBook':
      tempState = newBook.result
  }
  const load = (start: any) => {
    loadNewBookData(start)
  }
  return (
    <div>
      <div style={{height: '56px'}}>
        <NavBar leftContent={<IconWrap icon={<FiArrowLeft/>} style={{marginLeft: '-12px'}}/>}
                leftOnClick={()=>props.history.goBack()}
        />
      </div>
      <DetailsList dataSource={tempState} loadCallBack={load}/>
    </div>
  )
}

export default All