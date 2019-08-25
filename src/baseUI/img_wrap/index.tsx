import React, {useState} from 'react'
import LoadIcon from "../load_icon"
import './img_wrap.scss'

interface ImgWrapProps {
  style: any
  src: string
  alt?: string
}

const ImgWrap: React.FC<ImgWrapProps> = (props) => {
  const {src, alt, style} = props
  const [imageStatus, setImageStatus] = useState('loading')
  const classPrefix = 'img-wrap'
  return (
    <div className={classPrefix} style={style}>
      <img className={`${classPrefix}__img`} src={src} alt={alt}
           onLoad={() => setImageStatus('loaded')}
           onError={() => setImageStatus('failed')}
      />
      {imageStatus === 'loading'
        ? <div className={`${classPrefix}__mask`}><LoadIcon style={{height:'48px',width:'48px'}}/></div>
        : null
      }
    </div>
  )
}

ImgWrap.propTypes = {}

export default ImgWrap