import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Div1({children}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          setIsInView(inView);
        }
      };
  
      handleScroll(); // Initial check
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
    transition={{ duration: 0.5 }}
  >{children}</motion.div>
  )
}

export default Div1
