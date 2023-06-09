/*const btnNumbers = document.querySelectorAll(".btn.btn-number");

function logText(event) {
    console.log(event.target.innerHTML);
    
}
for(let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", logText);
}*/





// Lấy tất cả các phần tử button số
var numberButtons = document.querySelectorAll('.btn-number');

// Lấy tất cả các phần tử button phép tính
var operatorButtons = document.querySelectorAll('.action--operator');

// Phần tử hiển thị kết quả
var resultElement = document.getElementById('result');

// Biến lưu trữ biểu thức tính toán
var expression = '';

// Xử lý sự kiện khi nhấn vào một button số
numberButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var number = button.innerText;
    expression += number;
    updateResult();
  });
});

// Xử lý sự kiện khi nhấn vào một button phép tính
operatorButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var operator = button.innerText;
    expression += operator;
    updateResult();
  });
});

// Xử lý sự kiện khi nhấn vào button "=" để tính toán và hiển thị kết quả
var equalButton = document.querySelector('.calculate--equal');
equalButton.addEventListener('click', function() {
  calculateResult();
});

// Xử lý sự kiện khi nhấn vào button "AC" để xóa biểu thức và kết quả
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
  clearResult();
});

// Hàm cập nhật kết quả lên màn hình
function updateResult() {
  resultElement.innerText = expression;
}

// Hàm thực hiện tính toán và hiển thị kết quả
function calculateResult() {
  var result;
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }
  expression = result.toString();
  updateResult();
}

// Hàm xóa biểu thức và kết quả
function clearResult() {
  expression = '';
  updateResult();
}
