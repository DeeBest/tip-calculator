const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const button = document.querySelector('button');
const totalOutput = document.getElementById('total-output');

button.addEventListener('click', () => {
  const billAmount = +document.getElementById('bill-amount').value;
  const tipPercentage = +document.getElementById('tip-percentage').value;

  if (billAmount > 0 && tipPercentage > 0 && tipPercentage < 100) {
    let total = billAmount * (tipPercentage / 100) + billAmount;
    console.log(total);
    totalOutput.textContent = `Total Bill: $${total.toFixed(2)}`;
  } else alert('Please enter valid amount.');
});
