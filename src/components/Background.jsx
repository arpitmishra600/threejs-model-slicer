import React, { useEffect } from 'react';

export default function Background({ children }) {
  useEffect(() => {
    const circle = document.querySelector('.circle');
    let mouseX = 0;
    let mouseY = 0;

    function moveCircle() {
      const dx = (mouseX - parseInt(circle.style.left || 0)) * 0.1;
      const dy = (mouseY - parseInt(circle.style.top || 0)) * 0.1;

      circle.style.left = parseInt(circle.style.left || 0) + dx + 'px';
      circle.style.top = parseInt(circle.style.top || 0) + dy + 'px';

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
      <section id="canvas">
        <div className="circle"></div>
      </section>
      {children}
    </div>
  );
}
