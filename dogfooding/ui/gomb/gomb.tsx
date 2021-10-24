import React from 'react';

export type GombProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Gomb({ text }: GombProps) {
  return (
    <div>
      {text}
    </div>
  );
}
