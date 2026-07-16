function toggleMode() {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
}

function toggleSubmenu(e) {
  e.stopPropagation();
  document.getElementById('submenu').classList.toggle('open');
}

document.addEventListener('click', function () {
  const sm = document.getElementById('submenu');
  if (sm) sm.classList.remove('open');
});

(function initTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark-mode');
    }
  } catch (e) {}
})();
