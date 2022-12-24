import React from 'react'
import './News.css'

function News({title,days,readers}) {
  return (
    <div className='news'>
      <div className="news__header">
        <p>{title}</p>
      </div>
      <div className="news__info">
        <p>{days}</p>
        <p>{readers}</p>
      </div>
    </div>
  )
}

export default News
