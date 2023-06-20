function calculateSum() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    var sum = 0;
    for (var i = number1; i <= number2; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    document.getElementById("result").innerHTML = "Tổng các số nguyên tố từ " + number1 + " đến " + number2 + " là: " + sum;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
