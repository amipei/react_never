import React from 'react';
import Tabs from "./baseUI/tabs/Tabs"
import TabPane from "./baseUI/tabs/TabPane"
import {FiBook, FiGlobe, FiHome} from "react-icons/fi"
import {Route, Switch,Redirect} from "react-router-dom"
import Details from "./containers/details"
import Search from "./containers/search/view/Search"
import All from "./containers/all"
import Home from "./view/Home"
import Find from "./view/Find"
import Shlef from "./view/Shlef"
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Redirect from="/react_never" to="/react_never/home" />
      <Switch>
        <Route path="/react_never/all/:type" component={All} />
        <Route path="/react_never/details/:isbn" component={Details} />
        <Route path="/react_never/search" component={Search} />
        <Route path="/react_never" render={routeProps => (
          <Tabs>
            <TabPane path={'/react_never/home'} component={Home} tab={IndexTab} />
            <TabPane path={'/react_never/find'} component={Find} tab={FinedTab}/>
            <TabPane path={'/react_never/shelf'} component={Shlef} tab={ShelfTab} />
          </Tabs>
        )} />
      </Switch>
    </div>
  );
}

export default App;
const IndexTab = () => (
  <>
    <span className="m-tabs__icon"><FiHome /></span>
    <span className="m-tabs__title">首页</span>
  </>
)
const FinedTab = () => (
  <>
    <span className="m-tabs__icon"><FiGlobe /></span>
    <span className="m-tabs__title">探索</span>
  </>
)
const ShelfTab = () => (
  <>
    <span className="m-tabs__icon"><FiBook /></span>
    <span className="m-tabs__title">书架</span>
  </>
)