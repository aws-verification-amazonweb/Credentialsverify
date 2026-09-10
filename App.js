const VALID_CODE = "AWS-2026-X99";

const form = document.getElementById('verify-form');
const input = document.getElementById('verification-code');
const errorMsg = document.getElementById('error-message');
const formView = document.getElementById('form-view');
const resultView = document.getElementById('result-view');
const loaderOverlay = document.getElementById('loader-overlay');
const resetBtn = document.getElementById('reset-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const enteredCode = input.value.trim();

  if (enteredCode !== VALID_CODE) {
    errorMsg.textContent = `Invalid code. Try using: ${VALID_CODE}`;
    input.focus();
    return;
  }

  errorMsg.textContent = '';
  loaderOverlay.style.display = 'flex';

  // Balanced duration: 1.4 seconds
  setTimeout(() => {
    loaderOverlay.style.display = 'none';
    formView.style.display = 'none';
    resultView.style.display = 'flex';
  }, 1400);
});

resetBtn.addEventListener('click', () => {
  input.value = '';
  resultView.style.display = 'none';
  formView.style.display = 'block';
  input.focus();
});
