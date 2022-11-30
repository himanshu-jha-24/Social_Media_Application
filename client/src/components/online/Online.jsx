import './online.css'

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightBarProfileImg" />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUsername">{user.username}</span>
    </li>
    
  )
}
