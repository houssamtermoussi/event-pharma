// CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // GSAP ANIMATIONS
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();
  tl.fromTo('#h-eyebrow', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6, delay: 0.2})
    .fromTo('#h-title', {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.8}, "-=0.3")
    .fromTo('#h-sub', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6}, "-=0.4")
    .fromTo('#h-tags .hero-tag', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger: 0.1}, "-=0.3")
    .fromTo('#h-desc', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6}, "-=0.2")
    .fromTo('#h-prod', {x: 50, opacity: 0, rotation: 5}, {x: 0, opacity: 1, rotation: 0, duration: 1.2, ease: "power3.out"}, "-=1.5");

  gsap.to('.hero-bottle-svg', {
    y: -15, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1
  });

  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      }
    );
  });