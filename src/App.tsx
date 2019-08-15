import React from 'react';
import './App.css'
import Header from "./baseUI/header/Header";
import {Link, Route} from "react-router-dom"
import {FiChevronRight, FiTrash2} from "react-icons/fi"
import Express from "./baseUI/express/Express"
import NewBook from "./components/new_book/view/NewBook"
import Details from "./components/details/view/Details"

const App: React.FC = () => {
  return (
    <div className="App">
      {/*<Header title="主题" extra={<Link to='/ps'>连接<FiChevronRight /></Link>} />*/}
      {/*<Header title="主题" extra={<span className="icon" onClick={(e)=>console.log(e)}><FiTrash2 /></span>} />*/}
      <Route exact path="/" component={NewBook} />
      <Route exact path="/details/:isbn" component={Details} />
    </div>
  );
}

export default App;
