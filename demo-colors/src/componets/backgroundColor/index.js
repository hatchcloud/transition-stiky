 'use client'
 
 import React from 'react'
 import { useState } from 'react';
 import { motion } from 'framer-motion';
 
 export default function index() {

    const [bgColor, setBgColor] = useState('#3B82F6');
    const colors = ['#3B82F6', '#CBD5E1', '#06272D'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    
    const colorVariants = {
    initial: { backgroundColor: bgColor },
    changed: { backgroundColor: bgColor }, 
    };
    const handleButtonClick = () => {
        setCurrentColorIndex((currentColorIndex + 1) % colors.length);
        setBgColor(colors[currentColorIndex]);
    };
   return (
     <div className=' flex   h-screen w-screen flex-col items-center justify-between'>
       <motion.div
        style= {{ backgroundColor: bgColor,  height: '100%', width: '100%'}}
        className='flex h-full w-full'
        variants={colorVariants}
        initial='initial'
        animate='changed'
        transition={{ duration: 0.5 }}
      >
        <button onClick={handleButtonClick} className=' text-slate-800'>Cambiar Color</button>
      </motion.div>
      
     </div>
   )
 }
 