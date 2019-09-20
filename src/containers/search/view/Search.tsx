import React from 'react'
import { Switch, Route } from 'react-router';
import {SearchBar, SearchHistory, SearchList, SearchMatch} from "../components"

const Search: React.FC = (props:any) => {
  return (
    <div>
      <SearchBar />
      <Switch>
        <Route exact path='/react_never/search/' component={SearchHistory} />
        <Route exact path='/react_never/search/q' component={SearchList} />
        <Route exact path='/react_never/search/match' component={SearchMatch}/>
      </Switch>
    </div>
  )
}

export default Search