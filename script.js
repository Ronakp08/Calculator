function myCalculator() {
  let operator = document.querySelectorAll('.operator').value;
  let numbers = document.querySelectorAll('.number').value;
  let answer = document.getElementById('ans');



  let ans = 0;

  switch (operator) {
    case '+':
        ans = numbers + numbers;
        console.log(ans);
        break;
  
    default:
        break;
  }

}


