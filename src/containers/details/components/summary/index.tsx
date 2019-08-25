import React from 'react'
import PropTypes from 'prop-types'
import './summary.scss'

interface SummaryProps {
  data: string
}

const summary: React.FC<SummaryProps> = ({ data }) => {
  const array = delimitedText(data)
  const classPrefix = 'summary'
  return (
    <div className={classPrefix}>
      <h3 className={`${classPrefix}__title`}>内容简介</h3>
      {array.map((item, i) => (
        <p className={`${classPrefix}__p`} key={i+'text'}>{item}</p>
      ))}
    </div>
  )
}

summary.propTypes = {
  data: PropTypes.string.isRequired
}

export default summary

const delimitedText = (text: string) => {
  const reg = /([^]*?[\n\r])/g
  const textArray = []
  while (true) {
    let arr = reg.exec(text)
    if (arr) {
      textArray.push(arr[0])
    } else {
      break;
    }
  }
  return textArray
}