document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');

  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('show');
    btn.classList.toggle('open');

    const bars = btn.querySelectorAll('span');
    if (btn.classList.contains('open')) {
      bars[0].style.transform = 'translateY(8px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
    }
  });
});
