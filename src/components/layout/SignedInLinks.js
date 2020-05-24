import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
    <div>
            
            <div>
                <ul className="right">
                    <li><NavLink to='/'>New Project</NavLink></li>
                    <li><NavLink to='/'>Log Out</NavLink></li>
                    <li><NavLink to='/' className="btn btn-floating pink">NK</NavLink></li>
                </ul>
            </div>
    </div>
    )
}

export default SignedInLinks;