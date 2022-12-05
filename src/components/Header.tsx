import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';

export interface HeaderProps {}

const nav_links: { path: string; name: string }[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/shop',
    name: 'Shop',
  },
];

export function Header(props: HeaderProps) {
  const navLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'text-red-500 font-bold' : '';
  };
  return (
    <header className='header w-full h-[70px] leading-[70px] '>
      {/* Navigation */}
      <div className=' nav__container  bg-white shadow-3xl '>
        <div className='container text-[1.3rem]  mx-auto flex justify-between items-center '>
          {/* Left menu */}

          <div className='menu-left px-5'>
            <ul className='flex  px-0 '>
              {nav_links.map((item: { name: string; path: string }) => (
                <li className='mr-5 hover:text-red-500 ' key={item.name}>
                  <NavLink to={item.path} className={navLinkClasses}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}

          <div className='logo text-3xl'>
            <h1>
              <span className='text-red-500 font-bold '>MC</span>Boutique
            </h1>
          </div>

          {/* Right menu */}

          <div className='menu-right'>
            <ul className='flex  px-0  items-center '>
              <li className='mx-4 hover:text-red-500'>
                <AiOutlineHeart />
              </li>
              <li className='mx-4 hover:text-red-500'>
                <NavLink to='./cart' className=' flex justify-center items-center '>
                  <AiOutlineShoppingCart className='mr-1' /> Cart
                </NavLink>
              </li>
              <li className='mx-4 hover:text-red-500'>
                <NavLink to='./login' className='flex justify-center items-center'>
                  <AiOutlineUser className='mr-1' /> Login
                </NavLink>
              </li>
              <li className='mx-4 hidden hover:text-red-500'>
                <AiOutlineMenu />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
