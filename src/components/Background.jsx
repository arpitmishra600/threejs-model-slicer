import React, { useEffect } from 'react';

export default function Background({ children }) {
  useEffect(() => {
    const circle = document.querySelector('.circle');
    let mouseX = 0;
    let mouseY = 0;

    function moveCircle() {
      setTimeout(() => {
        const dx = (mouseX - parseInt(circle.style.left || 0)) * 0.06;
        const dy = (mouseY - parseInt(circle.style.top || 0)) * 0.06;
  
        circle.style.left = parseInt(circle.style.left || 0) + dx + 'px';
        circle.style.top = parseInt(circle.style.top || 0) + dy + 'px';
      }, 1000);

      requestAnimationFrame(moveCircle);
    }

    function updateMousePosition(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    }

    window.addEventListener('mousemove', updateMousePosition);
    moveCircle();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  

  return (
    <div>
      <div id="canvas" className='max-md:hidden'>
        <div className="circle"></div>
      </div>
      {children}
    </div>
  );
}
