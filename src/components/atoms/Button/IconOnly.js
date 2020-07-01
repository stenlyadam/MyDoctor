import React from 'react';
import {IconBackDark} from '../../../assets';

const IconOnly = ({icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackDark />;
    }
    return <IconBackDark />;
  };
  return <Icon icon={icon} />;
};

export default IconOnly;
