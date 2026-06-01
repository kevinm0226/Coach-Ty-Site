/* Coach Ty — light interactions */
(function () {
  'use strict';

  /* Mobile nav toggle */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    // close menu when a link is tapped
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* Mark current page in nav */
  var path = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* Scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* Friendly note for the "coming soon" store buttons */
  document.querySelectorAll('[data-soon]').forEach(function (btn) {
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      alert('Coach Ty is launching soon on the App Store and Google Play. Stay tuned! 🏃‍♂️🏋️');
    });
  });
})();
