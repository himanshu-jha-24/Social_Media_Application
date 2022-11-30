import './profile.css'
import TopBar from '../../components/topbar/Topbar'
import SideBar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import RightBar from '../../components/rightbar/rightbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Profile() {
  const [user,setUser]=useState({})
  const username=useParams().username
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  useEffect(()=>{
    const fetchUser=async ()=>{
      const res=await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  },[username])

  return (
    <>
    <TopBar/>
    <div className="profile">
      <SideBar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src={user.coverPicture?PF+user.coverPicture: "/assets/images.jpeg"}
                 alt="" className="profileCoverImg" />
                <img src={user.profilePicture?PF+user.profilePicture: "/assets/codememe.jpg"}
                 alt="" className="profileUserImg" />   
            </div>
             <div className="profileInfo">
                 <h4 className="profileInfoName">{user.username}</h4>
                 <span className="profileInfoDesc">{user.desc}</span>
             </div>
        </div>
        <div className="profileRightBottom">
          <Feed username={username}/>
          <RightBar user={user}/>
        </div>
      </div>
    </div>
  </>
  )
}
