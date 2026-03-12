import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a href="" className='navbar-brand text-light'>Stock Prediction Portal</a>
            <div>
                <Button href="" text = {"Login"} className={"btn btn-outline-info"}/>
                &nbsp;
                <Button href="" text = {"Register"} className={"btn btn-info"}/>
            </div>
        </nav>
    </>
  )
}

export default Header