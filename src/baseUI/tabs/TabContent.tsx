import React from 'react';

interface TabContentProps {
  panels: React.ReactNode | React.ReactNodeArray
}
const TabContent: React.FC<any> = (props) => {
  const {panels} = props
  return (
    <div className="tabs-content">
      {panels}
    </div>
  );
}

export default TabContent;