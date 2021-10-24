import React from 'react';
import { Gomb } from '@zoltan/dogfooding.ui.gomb'

export type KartyaProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Kartya({ text }: KartyaProps) {
  return (
    <div>
      {text}<br/>
      <Gomb text="ez egy gomb" />
    </div>
  );
}
