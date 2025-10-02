import React from 'react';
import {
  FaTint, FaBolt, FaCloud, FaMusic,
  FaLeaf, FaBook, FaArchive, FaCamera,
  FaPen, FaBox, FaGraduationCap, FaQuestionCircle
} from 'react-icons/fa';

const iconMap = {
  tint: FaTint,
  bolt: FaBolt,
  cloud: FaCloud,
  music: FaMusic,
  leaf: FaLeaf,
  book: FaBook,
  archive: FaArchive,
  camera: FaCamera,
  pen: FaPen,
  box: FaBox,
  'graduation-cap': FaGraduationCap,
};

const Icon = ({ name, size = 20, color = '#a0a0a0' }) => {
  const IconComponent = iconMap[name] || FaQuestionCircle;
  return <IconComponent size={size} color={color} />;
};

export default Icon;