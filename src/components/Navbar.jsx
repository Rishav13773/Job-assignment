import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='navWrap'>
            <div className='container'> 
                <h1 className='navHead'>QuickPosts</h1>
                <ul className='social'>
                    <li><BsFacebook /></li>
                    <li><BsInstagram /></li>
                    <li><BsTwitter /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar