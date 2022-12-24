// import { Icon } from '@mui/material'
import React from 'react'
import './InputOption.css'


function InputOption( {Icon,title,color,rotate}) {
  return (
    <div className='inputOption'>
      <Icon style = {{color : color, rotate:rotate}}/>
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption
