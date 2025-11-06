(function () {
  const progress = document.getElementById('footer-progress');
  const label = document.getElementById('footer-label');
  if (!progress || !label) return;

  function updateProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const pct = maxScroll === 0 ? 0 : Math.min(100, Math.round((scrollTop / maxScroll) * 100));

    progress.style.width = pct + '%';

    const p = pct / 100;
    const r = Math.round(255 * (1 - p));
    const g = Math.round(160 * p);
    const b = 0;
    progress.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    label.textContent = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  updateProgress();
})();
