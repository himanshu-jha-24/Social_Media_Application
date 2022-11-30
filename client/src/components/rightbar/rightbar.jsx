import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
import { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@mui/icons-material'


export default function Rightbar({ user }) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const [friends,setFriends]=useState([])
  const {user:curruser,dispatch}=useContext(AuthContext)
  const [followed,setFollowed]=useState(curruser.followings.includes(user?.id))

  useEffect(()=>{
    setFollowed(curruser.followings.includes(user?.id))
  },[curruser,user?.id])

  useEffect(()=>{
    const getFriends=async ()=>{
      try{
        const friendList=await axios.get("/users/friends/"+user._id)
        setFriends(friendList.data)
      }
      catch(err){
        console.log(err)
      }
    }
    getFriends()
  },[user]
  )
  const handleClick=async()=>{
    try{
      if(followed){
        await axios.put("/users/"+user._id+"/unfollow",{userId:curruser._id})
        dispatch({type:"UNFOLLOW",payload:user._id})
      }
      else{
        await axios.put("/users/"+user._id+"/follow",{userId:curruser._id})
        dispatch({type:"FOLLOW",payload:user._id})
      }
    }catch(err){
      console.log(err)
    }
    setFollowed(!followed)
  }

  const HomeRightBar=()=>{
    return (
      <>
      <div className="birthdayContainer">
          <img src="/assets/codememe.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>bravohimu</b> and <b>three others</b> have birthday today
          </span>
        </div>
        <img src="/assets/adds.jpg" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar=()=>{
    return (
      <>
        {user.username!==curruser.username&&(
          <button className="rightBarFollowButton" onClick={handleClick}>
            {followed?"Unfollow":"Follow"}
            {followed?<Remove/>:<Add/>}
          </button>
        )}
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoVal">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoVal">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoVal">
              {user.relationship===1
              ?"single":
              user.relationship===2?"married"
              :"*"}</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {friends.map((friend)=>(
            <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
              <div className="rightBarFollowing">
              <img src={friend.profilePicture ? PF+friend.profilePicture :"/assets/codememe.jpg"}
              alt="" 
              className="rightBarFollowingImg" />
              <span className="rightBarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  }
  return (
    <div className="rightBar">
        <div className="rightBarWrapper">
          {user?<ProfileRightBar/>:<HomeRightBar/>}
        </div>
    </div>
  )
}
