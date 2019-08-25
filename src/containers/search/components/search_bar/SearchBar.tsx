import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiX } from 'react-icons/fi'


import { useSearchValue } from "../../view/hook"
import './search_bar.scss'
import {IconWrap} from "../../../../baseUI"

const SearchBar: React.FC<any> = (props:any) => {
  const {value, onChange} = useSearchValue()
  const inputEl = useRef<HTMLInputElement>(null)
  const handleRemove = () => {
    onChange('')
    const node = inputEl.current
    if (node) {
      node.focus()
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  const classPrefix = "search-bar"
  return (
    <div className={`${classPrefix}`}>
      <Link className={`${classPrefix}__left`} to="/home">
        <IconWrap icon={<FiArrowLeft/>} />
      </Link>
      <input className={`${classPrefix}__input`}
             onChange={handleChange}
             ref={inputEl}
             type="text"
             value={value}
             placeholder="搜索"
      />
      {value ? (
        <IconWrap className={`${classPrefix}__x`}
               icon={<FiX/>}
               onClick={handleRemove}
        />
      ) : null}
    </div>
  )
}

export default SearchBar
