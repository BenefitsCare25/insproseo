const page = document.querySelector('.rc-page');
if (page) {
  const inputs = [...page.querySelectorAll('[data-renewal-check]')];
  const progress = page.querySelector('#renewal-progress');
  const count = page.querySelector('[data-renewal-count]');
  const panel = page.querySelector('[data-renewal-progress]');
  function updateProgress() {
    const checked = inputs.filter(input => input.checked).length;
    if (progress) {
      progress.max = inputs.length;
      progress.value = checked;
      progress.textContent = `${checked} of ${inputs.length}`;
    }
    if (count) count.textContent = `${checked} of ${inputs.length} items checked`;
  }
  if (panel) panel.hidden = false;
  const print = page.querySelector('[data-print]');
  if (print) print.hidden = false;
  inputs.forEach(input => input.addEventListener('change', updateProgress));
  window.addEventListener('pageshow', updateProgress);
  updateProgress();
}
