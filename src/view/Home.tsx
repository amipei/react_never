import React from 'react'

import NewBook from "../containers/new_book"
import HomeBar from "../containers/home_bar/HomeBar"

const Home: React.FC = () => {
  return (
    <div style={{paddingBottom: '56px'}}>
      <HomeBar/>
      <NewBook />
    </div>
  )
}

export default Home