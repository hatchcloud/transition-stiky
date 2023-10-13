'use client'
// components/ColorChanger.js

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const index = ({ id }) => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const colorMap = {
    1: 'red',
    2: 'blue',
    3: 'green',
  };

  useEffect(() => {
    if (colorMap[id]) {
      setBackgroundColor(colorMap[id]);
    }
  }, [id]);

  return (
    <motion.div
      initial={{ backgroundColor: 'white' }}
      animate={{ backgroundColor }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      Contenido del componente
    </motion.div>
  );
};

export default index;
