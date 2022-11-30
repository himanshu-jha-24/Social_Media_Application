import TopBar from '../../components/topbar/Topbar'
import SideBar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import RightBar from '../../components/rightbar/rightbar'
import './home.css'
//react need not be imported after new update

export default function Home() {
  return (
    <>
      <TopBar/>
      <div className="homeContainer">
        <SideBar/>
        <Feed/>
        <RightBar/>
      </div>
    </>
  )
}
