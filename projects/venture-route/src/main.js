import './styles.css';

const interestDialog = document.querySelector('#interestDialog');
const interestPanel = document.querySelector('#interestPanel');
const interestForm = document.querySelector('#interestForm');
const interestSuccess = document.querySelector('#interestSuccess');
const formSteps = [...document.querySelectorAll('[data-form-step]')];
const stepLabel = document.querySelector('#stepLabel');
const progressFill = document.querySelector('#progressFill');
const backStep = document.querySelector('#backStep');
const continueStep = document.querySelector('#continueStep');
const mobileNavDialog = document.querySelector('#mobileNavDialog');
const menuTrigger = document.querySelector('[data-open-menu]');
let activeStep = 1;

function focusField(selector) {
  window.requestAnimationFrame(() => document.querySelector(selector)?.focus());
}

function setActiveStep(step) {
  activeStep = step;
  formSteps.forEach((fieldset) => {
    const isActive = Number(fieldset.dataset.formStep) === activeStep;
    fieldset.hidden = !isActive;
    fieldset.disabled = !isActive;
  });

  stepLabel.textContent = `STEP ${activeStep} OF 2`;
  progressFill.style.width = activeStep === 1 ? '50%' : '100%';
  backStep.hidden = activeStep === 1;
  continueStep.innerHTML = activeStep === 1
    ? 'Continue <span aria-hidden="true">→</span>'
    : 'Finish preview <span aria-hidden="true">→</span>';
}

function resetInterestPreview() {
  interestForm.reset();
  interestPanel.hidden = false;
  interestSuccess.hidden = true;
  setActiveStep(1);
}

function openInterestPreview() {
  if (mobileNavDialog.open) mobileNavDialog.close();
  resetInterestPreview();
  if (!interestDialog.open) interestDialog.showModal();
  focusField('#applicantName');
}

document.querySelectorAll('[data-open-interest]').forEach((button) => {
  button.addEventListener('click', openInterestPreview);
});

menuTrigger.addEventListener('click', () => {
  if (!mobileNavDialog.open) mobileNavDialog.showModal();
  menuTrigger.setAttribute('aria-expanded', 'true');
});

document.querySelectorAll('[data-close-dialog]').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog')?.close());
});

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});

mobileNavDialog.addEventListener('close', () => {
  menuTrigger.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => mobileNavDialog.close());
});

backStep.addEventListener('click', () => {
  setActiveStep(1);
  focusField('#applicantName');
});

function validateActiveStep() {
  const activeFields = formSteps[activeStep - 1].querySelectorAll('input, textarea, select');
  for (const field of activeFields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      field.focus();
      return false;
    }
  }
  return true;
}

interestForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateActiveStep()) return;

  if (activeStep === 1) {
    setActiveStep(2);
    focusField('#problemIdea');
    return;
  }

  // This is a local preview: form values are never transmitted or persisted.
  interestForm.reset();
  interestPanel.hidden = true;
  interestSuccess.hidden = false;
  focusField('#interestSuccess button');
});

interestDialog.addEventListener('close', resetInterestPreview);
document.querySelector('#currentYear').textContent = new Date().getFullYear();
setActiveStep(1);
