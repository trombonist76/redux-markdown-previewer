import React, { useState } from 'react'
import {FaQuestion} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { toggleHelp } from '../redux/markdownSlice'

export default function Help() {
  const dispatch = useDispatch()
  const [toggle,setToggle] = useState(false)
  const isToggled = toggle ? "active" : ""

  const handleClick = () => {
    dispatch(toggleHelp())
    setToggle(!toggle)
  }

  return (
    <div className='help'>
        <button className={isToggled} onClick={handleClick}><FaQuestion/></button>        
    </div>
  )
}
