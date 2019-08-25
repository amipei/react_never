import React from 'react';
import { Route } from 'react-router';

interface TabPaneProps {
  path: string
  component: any
  tab?: any
}
const TabPane: React.FC<TabPaneProps> = (props) => {
  const {path, component: Component } = props
  return (
    <Route path={path} render={routeProps => {
      return (
        <Component />
      )
    }} />
  );
}

export default TabPane;