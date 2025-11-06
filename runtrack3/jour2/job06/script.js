(function () {
  const konami = ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright'];
  let pos = 0;
  let activated = false;

  function activateKonami() {
    if (activated) return;
    activated = true;
    document.body.classList.add('konami');

    const banner = document.createElement('div');
    banner.className = 'konami-banner';
    banner.innerHTML = `
      <div class="logo">LP</div>
      <div>
        <div class="title">La Plateforme_</div>
        <div class="subtitle">Theme activé — Bienvenue !</div>
      </div>
    `;
    document.body.appendChild(banner);

    const f = document.createElement('div');
    f.className = 'konami-footer-accent';
    document.body.appendChild(f);

    banner.animate([
      { transform: 'translateY(-10px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ], { duration: 420, easing: 'cubic-bezier(.2,.9,.3,1)' });
  }

  function resetProgress(key) {
    if (key === konami[0]) pos = 1; else pos = 0;
  }

  document.addEventListener('keydown', function (e) {
    const key = (e.key || '').toLowerCase();
    if (!key) return;

    if (key === konami[pos]) {
      pos += 1;
      if (pos === konami.length) {
        activateKonami();
        pos = 0;
      }
    } else {
      resetProgress(key);
    }
  });
})();
