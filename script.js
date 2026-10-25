const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

document.querySelectorAll('[data-video]').forEach(btn => {
  btn.addEventListener('click', () => {
    modalVideo.src = btn.dataset.video;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalVideo.play().catch(() => {});
  });
});

document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeModal);
});

function closeModal() {
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

document.querySelectorAll('.media-frame video').forEach(video => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
  }, {threshold: .35});
  observer.observe(video);
});

document.querySelector('.menu-btn').addEventListener('click', () => {
  const nav = document.querySelector('.desktop-nav');
  if (getComputedStyle(nav).display === 'none') {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '66px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '22px 6vw';
    nav.style.background = 'rgba(28,29,23,.97)';
    nav.style.flexDirection = 'column';
  } else {
    nav.style.display = '';
  }
});
