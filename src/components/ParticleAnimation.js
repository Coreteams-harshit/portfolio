import React, { useEffect, useRef } from 'react';

const ParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rate = 60;
    const arc = 100;
    const size = 7;
    const speed = 20;
    const parts = new Array(arc);
    const colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
    const mouse = { x: 0, y: 0 };

    canvas.width = w;
    canvas.height = h;

    function createParticles() {
      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, w, h);
      canvas.addEventListener('mousemove', handleMouseMove, false);

      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        const distanceFactor = Math.max(Math.min(15 - distanceBetween(mouse, parts[i]) / 10, 10), 1);

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        i % 2 === 0 ? ctx.stroke() : ctx.fill();

        li.x += li.toX * (time * 0.05);
        li.y += li.toY * (time * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }

      if (time < speed) {
        time++;
      }
      setTimeout(animateParticles, 1000 / rate);
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function distanceBetween(p1, p2) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    let time = 0;
    createParticles();
    animateParticles();
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ParticleAnimation;
