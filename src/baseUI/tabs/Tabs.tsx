import React, { useState } from 'react';
import './Tabs.scss';

import TabContent from './TabContent';
import TabNav from './TabNav';


interface TabsProps {
  className?: string
  classPrefix?: string
  children?: any
  defaultActiveIndex?: number //组件内控制
  activeIndex?: number //组件外控制
  onChange?: any
}

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    classPrefix = "m-tabs",
    className,
    children
  } = props

  const renderTabNav = () => {
    return (
      <TabNav
        classPrefix={classPrefix}
        panels={children}
       />
    )
  }
  const renderTabContent = () => {
    return (
      <TabContent
        classPrefix={classPrefix}
        panels={children}
        />
    )
  }
  return (
    <div className="">
      {renderTabContent()}
      {renderTabNav()}
    </div>
  );
}

export default Tabs;

