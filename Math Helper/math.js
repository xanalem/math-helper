var button = document.getElementById('solve');
button.addEventListener("click", () => {
    document.getElementById("solutions").textContent = varN_an();
});

function changeElementClass(id, className) {
    var change = document.getElementById(id);
    change.className = className;
}

function varN_an() {
    var a = document.getElementById('a').value,
        b = document.getElementById('b').value,
        c = document.getElementById('c').value;

    var bee = (b * b),
        ac = (4 * a * c),
        Sqrt = Math.sqrt(bee - ac),
        f1 = ((-1 * b) + Sqrt) / (2 * a),
        f2 = ((-1 * b) - Sqrt) / (2 * a);

    if (isNaN(a) || isNaN(b) || isNaN(c) == true) {
        changeElementClass("solutions", "invalid");
        return "You entered an incorrect value for either A, B, or C. Please try again.";

    } else if (bee < ac) {
        changeElementClass("solutions", "noreal");
        return "There are no real solutions.";

    } else {
        changeElementClass("solutions", "real");
        return "The roots to the quadratic are " + f1 + " and " + f2;
    }
}
