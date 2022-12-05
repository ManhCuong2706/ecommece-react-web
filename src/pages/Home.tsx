import { Banner } from '@/components/Banner';
import { Categories } from '@/components/Categories';
import * as React from 'react';

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <>
      <Banner />
      <Categories />
    </>
  );
}
