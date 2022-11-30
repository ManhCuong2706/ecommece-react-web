import * as React from 'react';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className='footer bg-black text-white'>
      <div className='container mx-auto flex justify-between'>
        <ul className='text-gray-300 italic'>
          <p className='font-bold'>CUSTOM SERVICE</p>
          <li>
            <a href='#'>Help contact us</a>
          </li>
        </ul>
        <ul className='text-gray-300 italic'>
          <p className='font-bold'>CUSTOM SERVICE</p>
          <li>
            <a href='#'>Help contact us</a>
          </li>
        </ul>
        <ul className='text-gray-300 italic'>
          <p className='font-bold'>CUSTOM SERVICE</p>
          <li>
            <a href='#'>Help contact us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
