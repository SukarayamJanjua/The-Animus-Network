import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import { userEvent } from '@testing-library/user-event/dist/types/setup';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';


function Sidebar() {
    const user = useSelector(selectUser);
    //declaring a function and passing parameter as topic here
    const recentItem = (topic)=> (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
    )
    
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://gamedevacademy.org/wp-content/uploads/2020/12/shutterstock_1146279782-scaled.jpg" alt=""/>
            <Avatar className='sidebar__avatar' src={user.photoURL}/>    
            {/* <Avatar className='sidebar__avatar' src='https://www.koimoi.com/wp-content/new-galleries/2020/10/peaky-blinders-do-you-know-cillian-murphy-as-thomas-shelby-smoked-3000-cigarettes-in-just-2-seasons-002.jpg'/>      */}
            <h2>{user.displayName}</h2>
            {/* <h4>Learner | Web | Game dev & 3d | C++ | Core member GDSC-NITJ</h4> */}
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Your liked posts</p>
                <p className='sidebar__statNumber'>134</p>
            </div>
            <div className="sidebar__stat sidebar__statBottom">
                <p>Impressions of your post</p> 
                <p className='sidebar__statNumber'>1,615</p>
            </div>
            <div className="sidebar__premium">
                <img src="https://tandsgo.com/wp-content/uploads/2014/06/LinkedIn-Premium-Badge1.png" alt="" />
                <p>See your premium features</p>
            </div>
            <div className="sidebar__myItems">
                <BookmarkBorderIcon />
                <p>My Items</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p className='sidebar__bottom__text'>Recent</p>
            {recentItem('React.js')}
            {recentItem('Programming')}
            {recentItem('Software Developer')}
            {recentItem('Blender')}
            {recentItem('Ethical Hacking')}
            {/* <p>Is there something here</p> */}
        </div>
    </div>

  )
}

export default Sidebar
