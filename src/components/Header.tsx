import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <div className='container'>
        <div className='row '>
          <div className='nav-wraper flex'>
            <div className='logo'>
              <h1>MC Shop</h1>
            </div>
            <div>
              <ul className='flex'>
                <li>
                  <NavLink to='./'> Home</NavLink>
                </li>
                <li>
                  <NavLink to='./'> Shop</NavLink>
                </li>
                <li>
                  <NavLink to='./'> Cart</NavLink>
                </li>
                <li>
                  <NavLink to='./'> Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
