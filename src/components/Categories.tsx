import { dividerClasses } from '@mui/material';
import * as React from 'react';

import product01 from '../assets/img/product_1.png';
import product02 from '../assets/img/product_2.png';
import product03 from '../assets/img/product_3.png';
import product04 from '../assets/img/product_4.png';
import product05 from '../assets/img/product_5.png';

const imgs: any[] = [
  [product01, product02],
  [product03, product04, product05],
];

export interface CategoriesProps {}

export function Categories(props: CategoriesProps) {
  return (
    <div className='container  mb-[50px]'>
      <div className='text-center my-9 italic'>
        <p className='text-gray-400'>CAREFULLY CREATED COLLECTION</p>
        <p className='font-200 text-[1.35rem] '>BROWSE OUR CATEGORIES</p>
      </div>
      {imgs.map((array) => (
        <div className='flex justify-evenly mb-[50px]  '>
          {array.map((item: any) => (
            <div className='h-[320px] rounded-xl overflow-hidden  hover:opacity-75'>
              <img className='hover:scale-y-105' src={item} alt={item} />
            </div>
          ))}
        </div>
      ))}
      <></>
    </div>
  );
}
