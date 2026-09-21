/* Theme toggle. Loaded synchronously in <head> so the stored theme is applied
   before first paint. Light is the default; dark is opt-in and remembered. */
(function () {
  var KEY = 'ks-theme';

  try {
    if (localStorage.getItem(KEY) === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) { /* storage unavailable; stay light */ }

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;

    function sync() {
      var dark = isDark();
      btn.textContent = dark ? 'Light' : 'Dark';
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    btn.addEventListener('click', function () {
      var dark = isDark();
      if (dark) document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem(KEY, dark ? 'light' : 'dark'); } catch (e) {}
      sync();
    });

    sync();
  });
})();
