import React, {useEffect} from 'react'
import {useInView} from "react-intersection-observer"
import {LoadIcon} from "../index"
import './bottom_load.scss'
interface BottomLoadProps {
  loadCallBack: () => void
}

const BottomLoad: React.FC<BottomLoadProps> = ({loadCallBack}) => {
  const [ref,inView,entry] = useInView()
  useEffect(() => {
    if(inView) {
      loadCallBack()
    }
  }, [inView])

  const classPrefix = 'bottom-load'
  return (
    <div className={classPrefix} ref={ref}>
      <LoadIcon style={{height: '30px', width: '30px'}}/>
    </div>
  )
}

export default BottomLoad