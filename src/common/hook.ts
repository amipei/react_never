import {useEffect, useState} from "react"
import {useInView} from "react-intersection-observer"
import {addMatchSearch} from "../containers/search/redux/actions"
import {useDispatch} from "react-redux"

 const useScrollBar = () => {
  const [isInTop, setIsInTop] = useState(true)
  const handleScroll = (e: any) => {
    const scrollY = window.pageYOffset
    if (scrollY > 0) {
      setIsInTop(false)
    } else {
      setIsInTop(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  })
  return [isInTop]
}
export default useScrollBar
export const useBottomLoad = (callBack: any) => {
  const [ref,inView,entry] = useInView()
  const dispatch = useDispatch()
  useEffect(() => {
    if(inView) {
      callBack()
    }
  }, [inView])

  return [ref]
}


