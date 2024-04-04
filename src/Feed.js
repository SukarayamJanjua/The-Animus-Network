import React, { useEffect, useState } from 'react' // import useState
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { db } from './firebase';
import firebase from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Feed() {
  const user = useSelector(selectUser);
  const [input,setInput] = useState('');
  const [posts, setPosts] = useState([]);   //React it is for storing the state we use states in () we put the initial values
  
  useEffect(()=>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc => (
        {
          id:doc.id,
          data:doc.data(),
        }
      )))
    ));
  },[])

  const sendPost = event =>{
    event.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    })
    setInput("");
  };


  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        {/* <Avatar className='feed__avatar' src='https://www.koimoi.com/wp-content/new-galleries/2020/10/peaky-blinders-do-you-know-cillian-murphy-as-thomas-shelby-smoked-3000-cigarettes-in-just-2-seasons-002.jpg'/> */}
        <Avatar className='feed__avatar' src={user.photoURL}/>
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input placeholder='Start a post' value={input} onChange={event=> setInput(event.target.value)} type="text"/>
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
      </div>
      <div className="feed__inputOptions">
           <InputOption Icon={ImageIcon} title = "Photo" color="#70B5F9"/>
           <InputOption Icon={YouTubeIcon} title = "Video" color="rgb(129, 196, 98)"/>
           <InputOption Icon={GifIcon} title = "GIF" color="rgb(140, 58, 179)"/>
           <InputOption Icon={EmojiEmotionsIcon} title = "Emojis" color="rgb(225 223 51)"/>
      </div> 
      {/* Posts */}    
      {posts.map(({id,data:{name,description,message,photoUrl}})=>(   //react using map
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post name='Sukarayam Janjua' description='This is a test' 
      message='Wow this worked'/> */}
    </div>
  )
}

export default Feed
