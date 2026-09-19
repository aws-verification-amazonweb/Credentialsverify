// Database of credentials (case-insensitive lookups handled)
const CREDENTIALS = {
  "5BPVX7JCFQ4QYS6": {
    name: "AWS Certified Solutions Architect – Associate",
    issueDate: "16-05-2025",
    expireDate: "16-05-2028"
  },
  "1BK6ESTCDBE41PKC": {
    name: "AWS Certified SysOps Administrator – Associate",
    issueDate: "03-10-2025",
    expireDate: "03-10-2028"
  },
  "9RT4KMP89WXZ76LQ": {
    name: "AWS Certified Machine Learning Engineer – Associate",
    issueDate: "07-07-2026",
    expireDate: "07-07-2029"
  }
};

const form = document.getElementById('verify-form');
const input = document.getElementById('verification-code');
const errorMsg = document.getElementById('error-message');
const formView = document.getElementById('form-view');
const resultView = document.getElementById('result-view');
const loaderOverlay = document.getElementById('loader-overlay');
const resetBtn = document.getElementById('reset-btn');

// Dynamic result elements
const certNameEl = document.getElementById('cert-name');
const activeSinceEl = document.getElementById('active-since');
const expiresOnEl = document.getElementById('expires-on');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const enteredCode = input.value.trim().toUpperCase();
  const credential = CREDENTIALS[enteredCode];

  if (!credential) {
    errorMsg.textContent = "Invalid verification code. Please check and try again.";
    input.focus();
    return;
  }

  // Clear errors and display wavy loader
  errorMsg.textContent = '';
  loaderOverlay.style.display = 'flex';

  // Smooth realistic verification delay (1.4s)
  setTimeout(() => {
    certNameEl.textContent = credential.name;
    activeSinceEl.textContent = credential.issueDate;
    expiresOnEl.textContent = credential.expireDate;

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

