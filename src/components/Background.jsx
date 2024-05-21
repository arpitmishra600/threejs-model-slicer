import React, { useEffect, useState } from 'react';

export default function Background({ children }) {
  var scroll=0.0;
  useEffect(() => {
    const circle = document.querySelector('.circle');
    let mouseX = 0;
    let mouseY = 0;

    function moveCircle() {
    
        const dx = (mouseX - parseInt(circle.style.left || 0)) * 0.06;
        const dy = (mouseY - parseInt(circle.style.top || 0)) * 0.06;
        console.log(scroll)
        if(scroll<98){
          circle.style.left = parseInt(circle.style.left || 0) + dx + 'px';
        circle.style.top = parseInt(circle.style.top || 0) + dy + 'px';}else{
          const bottomCenterX = window.innerWidth / 2 - circle.offsetWidth / 2;
                const bottomCenterY = document.documentElement.scrollHeight - circle.offsetHeight;
                circle.style.left = bottomCenterX + 'px';
                circle.style.top = bottomCenterY -180+ 'px';
        }
     

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
  window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // Get the height of the document and the window
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    // Calculate the scroll percentage
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

    scroll=scrollPercent
   
});

  

  return (
    <div>
      <div id="canvas" className='max-md:hidden'>
        <div className="circle"></div>
      </div>
      {children}
    </div>
  );
}
