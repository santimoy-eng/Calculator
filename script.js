let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;

    if (value == '=') {
      try {
        string = eval(string);
      } catch {
        string = "Error";
      }
      document.querySelector('input').value = string;
    } else if (value == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    } else if (value == '⌫') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else if (value == '+/-') {
      if (string) {
        if (string.startsWith('-')) {
          string = string.slice(1);
        } else {
          string = '-' + string;
        }
        document.querySelector('input').value = string;
      }
    } else {
      string = string + value;
      document.querySelector('input').value = string;
    }
  });
});
