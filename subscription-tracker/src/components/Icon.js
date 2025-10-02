import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Icon = ({ name, size = 24, color = '#ffffff' }) => {
  const IconComponent = name || FaBeer;
  return <IconComponent size={size} color={color} />;
};

export default Icon;