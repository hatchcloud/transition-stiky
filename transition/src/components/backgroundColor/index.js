'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Index() {
  const [bgColor, setBgColor] = useState('bg-red-500');
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500'];
  const [id, setId] = useState(0);

  useEffect(() => {
    setBgColor(colors[id]);
  }, [id]);

  const changeColor = () => {
    setId((id + 1) % colors.length);
  };

  return (
    <div className={`h-screen w-screen ${bgColor}`}>
      <button onClick={changeColor}>Cambiar Color</button>
    </div>
  );
}
