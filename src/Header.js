import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/counter/userSlice';

function Header(){
    const dispatch = useDispatch();
    const logoutOfApp=() => {
        dispatch(logout())
        auth.signOut();
    }
    return(
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={PeopleIcon} title='My Network' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={MarkUnreadChatAltIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Messaging' />
                <HeaderOption
                    avatar="https://www.koimoi.com/wp-content/new-galleries/2020/10/peaky-blinders-do-you-know-cillian-murphy-as-thomas-shelby-smoked-3000-cigarettes-in-just-2-seasons-002.jpg" 
                    title='Me'
                    onClick={logoutOfApp} />
            </div>
        </div>

    )
}


export default Header