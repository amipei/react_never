import React from 'react'
import {Link} from "react-router-dom"
import {FiMenu, FiSearch} from "react-icons/fi"
import {NavBar, IconWrap} from "../../baseUI"
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const HomeBar: React.FC = () => {
  return (
    <div style={{height: '56px'}}>
      <NavBar leftContent={<IconWrap icon={<FiMenu/>} style={{marginLeft: '-12px'}}/>}
              leftOnClick={()=>toast("此功能开发中")}
              rightContent={
                <Link to="/search">
                  <IconWrap icon={<FiSearch/>} style={{marginRight: '-12px'}}/>
                </Link>}
      >

      </NavBar>
      <ToastContainer />
    </div>
  )
}

export default HomeBar