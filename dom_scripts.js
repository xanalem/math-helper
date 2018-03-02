var button = document.getElementById('changeBackground');

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

button.addEventListener('click', bgChange);

var button2 = document.getElementById('randomNum');

function displayRandomNum() {
    var rndNum = random(100);
    document.getElementById('result').textContent = rndNum;
}

button2.addEventListener('click', displayRandomNum);

var button3 = document.getElementById('checkIfPrime');

function checkPrime(number) {
    // Get the floored square root of the incoming number
    // This is where we need to stop.
    var stop = Math.floor(Math.sqrt(number));
    // Now loop through to see if it is divisible
    // by any number between 2 and the stop number
    for (i = 2; i <= stop; ++i) {
        if (number % i == 0) {
            // Found a divisor - not prime.
            return false;
        }
    }
    return true;
}

function displayCheckedPrime() {
    var input = document.getElementById('inputNum').value;
    var result = checkPrime(input);
    if (result == false) {
        document.getElementById('prime').textContent = "This is not a prime number.";
    } else {
        document.getElementById('prime').textContent = "This is a prime number.";
    }
}

button3.addEventListener('click', displayCheckedPrime);
