import React from 'react'
import { Switch, Route } from 'react-router';
import {SearchBar, SearchHistory, SearchList, SearchMatch} from "../components"

const Search: React.FC = (props:any) => {
  return (
    <div>
      <SearchBar />
      <Switch>
        <Route exact path='/search/' component={SearchHistory} />
        <Route exact path='/search/q' component={SearchList} />
        <Route exact path='/search/match' component={SearchMatch}/>
      </Switch>
    </div>
  )
}

export default Search