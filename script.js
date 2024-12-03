//your JS code here. If required.
// Automatically focus the next input when a digit is entered
const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && index > 0 && input.value.length === 0) {
      inputs[index - 1].focus();
    }
  });
});
