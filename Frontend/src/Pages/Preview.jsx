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

        <form action="">

        </form>
      </div>
    </div>
  )
}

export default Preview
