import React from 'react'
import './header.scss'

interface HeaderProps {
  title: string
  extra?: React.ReactNode
  onClick?: () =>void
}

const  Header: React.FC<HeaderProps> = (props) => {
  const { title, extra, ...other } = props

  const classPrefix = 'header'
  return (
    <div className={classPrefix}>
      <h2 className={`${classPrefix}__title`}>{title}</h2>
      <div className={`${classPrefix}__extra`} {...other}>
        { extra }
      </div>
    </div>
  );
};

export default Header;