import React from 'react'
import LogoImage from '../../assets/images/burger-logo.png'
import LogoCss from './Logo.css'

const  Logo = (props)=>{
    return (
        <div className={LogoCss.Logo}>
            <img src={LogoImage} alt="My burger"/>
        </div>
    )
}

export default Logo
