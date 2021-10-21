import React from 'react';

export type GombProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Gomb({ text }: GombProps) {
  return (
    <button>
      {text} new version
    </button>
  );
}
