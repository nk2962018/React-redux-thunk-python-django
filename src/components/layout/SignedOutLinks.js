import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
    <div>
            
            <div>
                <ul className="right">
                    <li><NavLink to='/'>Sign Up</NavLink></li>
                    <li><NavLink to='/'>Login</NavLink></li>
                    
                </ul>
            </div>
    </div>
    )
}

export default SignedOutLinks;