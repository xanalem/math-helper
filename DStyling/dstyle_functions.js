var button = document.getElementById('checkIfPrime');

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
    var message = document.getElementById('prime');
    if (isNaN(input)) {
        message.textContent = "The value " + input + " is not a number.";
        changeElementClass("inputNum", "invalid");
    } else if (result == false) {
        message.textContent = "This is not a prime number.";
        changeElementClass("inputNum", "fail");
    } else {
        message.textContent = "This is a prime number.";
        changeElementClass("inputNum", "success");
    }
}

button.addEventListener('click', displayCheckedPrime);


function setSuccessStyle(id) {
    var el = document.getElementById(id);
    el.style.color = "green";
}

function setFailStyle(id) {
    var el = document.getElementById(id);
    el.style.color = "grey";
}

function setInvalidStyle(id) {
    var el = document.getElementById(id);
    el.style.color = "red";
    el.style.fontSize = "20px";
    el.style.borderStyle = "solid";
    el.style.borderColor = "red";
    el.style.borderRadius = "5px";
    el.style.padding = "5px";
}


function changeElementClass(id, className) {
    var el = document.getElementById(id);
    el.className = className;
}
