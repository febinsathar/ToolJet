import type React from 'react';

export interface MainProps {
    text: string;
}

export const Tview: React.VFC<MainProps> = ({ text }) => <main>{text}</main>;
