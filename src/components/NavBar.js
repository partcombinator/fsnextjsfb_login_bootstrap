import React from 'react'

export default function NavBar() {
  return (
        <nav className='navbar'>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='/register'>Register</a></li>
                <li><a href='/dashboard'>Dashboard</a></li>
            </ul>
        </nav>
  );
}