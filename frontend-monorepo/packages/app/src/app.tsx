import type React from 'react';
import { Main } from '@tooljet/components';
import { Tview } from './tssample/index'

// import { Tview } from '@/jssample/index'

export interface AppProps {
  text: string;
}

export const App: React.VFC<AppProps> = ({ text }) => {
  return (
    <div>
      <Tview text={"from app"} />
      <Main text={"from library"} />
    </div>
  )
};
