var button = document.getElementById('solve');
button.addEventListener("click", () => {
    document.getElementById("solutions").textContent = varN_an();
});

function varN_an() {
    var a = document.getElementById('a').value,
        b = document.getElementById('b').value,
        c = document.getElementById('c').value,
        a2 = 2 * a,
        ac = 4 * a * c,
        bee = Math.pow(b, 2),
        top = bee - ac;

    if (bee < 0) {
        return = 'No real roots exist 

    } else {
        var bee_sqrt = Math.sqrt(bee);
        var x1 = -b + bee_sqrt;
        var x1 = x1 / a2;
        var x2 = -b - bee_sqrt;
        var x2 = x2 / a2;

    }
}
