import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import News from './News';


function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <p>LinkedIn News</p>
        <InfoIcon/>
      </div>
      <div className="widgets__news">
        <News title='IPL Auctions' days='2d ago' readers='8582 readers'/>
        <News title='Twitter CEO' days='2d ago' readers='6789 readers'/>
        <News title='FIFA WC Qatar' days='2d ago' readers='12498 readers'/>
        <News title='Cryptocurrency' days='1d ago' readers='4590 readers'/>
        <News title='Gaming' days='2d ago' readers='4312 readers'/>
        <News title='College sucks' days='1d ago' readers='6728 readers'/>
        <News title='Stock market' days='1d ago' readers='3498 readers'/>
        <News title='Oportunities' days='1d ago' readers='4511 readers'/>
      </div>

    </div>
  )
}

export default Widgets
