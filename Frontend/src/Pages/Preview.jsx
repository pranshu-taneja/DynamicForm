import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Styles/Preview.css"

function Preview() {
  const navigate = useNavigate();



  const navigateFormBuilder = () => {
    navigate("/")
  }
  return (
    <div className='PreviewWrapper'>
      <div className='FormWrapper'>
        <button className='navigateBuilderBtn' onClick={navigateFormBuilder}>ChangeForm↩️</button>
        <h2 style={{color:"black"}}>This functionality is currently in development</h2>

      </div>
    </div>
  )
}

export default Preview
