import React from 'react';

import icons from './icons.svg';

const Icon = ({ iconName, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 95 90"
    className={className}
    dangerouslySetInnerHTML={{ __html: `<use xlink:href="${icons}#${iconName}"/>` }}
  />
);

export default Icon;
