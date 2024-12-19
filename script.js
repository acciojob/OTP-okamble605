// Handle focus and navigation
document.querySelectorAll('.otp-inputs input').forEach((input, index, inputs) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      // If valid digit, move to the next input
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      // Clear invalid input
      e.target.value = '';
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      // Clear current input and focus previous if empty
      if (input.value === '' && index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
