import Routers from '@/routers/Routers';
import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}
