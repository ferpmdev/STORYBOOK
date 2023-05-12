import { createElement } from 'react';

export const createButton = ({ style = 'outline', size = 'medium', label }) => {
  const button = document.createElement('button');
  button.type = 'submit';
  button.role = 'button';
  button.innerHTML = label;

  return button;
};
