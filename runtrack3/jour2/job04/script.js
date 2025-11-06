(function () {
  const ta = document.getElementById('keylogger');

  if (!ta) return;

  function isLetterKey(key) {
    return /^[a-zA-Z]$/.test(key);
  }

  document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (!isLetterKey(key)) return;

    setTimeout(() => {
      if (document.activeElement === ta) {
        const pos = ta.selectionStart || 0;
        const before = ta.value.slice(0, pos);
        const after = ta.value.slice(pos);
        ta.value = before + key + after;
        const newPos = pos + 1;
        ta.selectionStart = ta.selectionEnd = newPos;
      } else {
      }
    }, 0);
  });
})();
