import './sidebar.css'
import { Bookmark, Chat, Event, Group, QuestionMark, RssFeed, VideoLibrary, Work } from '@mui/icons-material'
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'
export default function sidebar() {
  return (
    <div className="sideBar">
        <div className="sideBarWrapper">
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <RssFeed className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Feed
                    </span>
                </li>
            </ui>
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <Chat className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Chats
                    </span>
                </li>
            </ui>
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <VideoLibrary className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Videos
                    </span>
                </li>
            </ui>
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <Group className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Groups
                    </span>
                </li>
            </ui>
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <Bookmark className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Bookmarks
                    </span>
                </li>
            </ui>
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <QuestionMark className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Questions
                    </span>
                </li>
            </ui>
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <Work className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Jobs
                    </span>
                </li>
            </ui>
            <ui className="sideBarList">
                <li className="sideBarListItem">
                    <Event className="sideBarIcon"/>
                    <span className="sideBarListItemText">
                        Events
                    </span>
                </li>
            </ui>
            <button className="sideBarButton">
                Show More
            </button>
            <hr className="sideBarHr" />
            <ul className="sideBarFriendList">
                {Users.map(u=>(
                    <CloseFriend key={u.id} user={u}/>
                ))}
            </ul>
        </div>
    </div>
  )
}
