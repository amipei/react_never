import React from 'react'
import PropTypes from 'prop-types';

import './header.scss'

interface HeaderProps {
  title: string
  extra?: React.ReactNode
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title, extra } = props
  const classPrefix = 'header'

  return (
    <div className={classPrefix}>
      <h2 className={`${classPrefix}__title`}>{title}</h2>
      <div className={`${classPrefix}__extra`}>
        { extra }
      </div>
    </div>
  );
};

Header.propTypes = {

};

export default Header;