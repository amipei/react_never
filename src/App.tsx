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
      <Redirect from="/" to="/home" />
      <Switch>
        <Route path="/all/:type" component={All} />
        <Route path="/details/:isbn" component={Details} />
        <Route path="/search" component={Search} />
        <Route path="/" render={routeProps => (
          <Tabs>
            <TabPane path={'/home'} component={Home} tab={IndexTab} />
            <TabPane path={'/find'} component={Find} tab={FinedTab}/>
            <TabPane path={'/shelf'} component={Shlef} tab={ShelfTab} />
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