import React from 'react'
import Button from './Button'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link href="" className='navbar-brand text-light' to={"/"}>Stock Prediction Portal</Link>
            <div>
                <Button url="/login" text = {"Login"} className={"btn btn-outline-info"}/>
                &nbsp;
                <Button url="/register" text = {"Register"} className={"btn btn-info"}/>
            </div>
        </nav>
    </>
  )
}

export default Header