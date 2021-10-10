import type React from 'react';
import { Main } from '@sample/components';
import { Test } from './test';

export interface AppProps {
  text: string;
}

export const App: React.VFC<AppProps> = ({ text }) => {
  return (
    <div>
      <Test text={"yoooo"} />
      <Main text={text} />
    </div>
  )
};
