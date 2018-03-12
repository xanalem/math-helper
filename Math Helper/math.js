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

    if (dis < 0) {
        document.getElementById('Equation').innerHTML = 'No real roots exist since Discriminant < 0 !<br />D = ' + dis + ' <br />The Equation = ' + a + 'x&#178; + ' + b + 'x + ' + c + '<br />';
        document.getElementById('x1').innerHTML = '&nbsp; ';
        document.getElementById('x2').innerHTML = '&nbsp; ';
    } else {
        var dis_sqrt = Math.sqrt(dis);
        var x1 = -b + dis_sqrt;
        var x1 = x1 / a2;
        var x2 = -b - dis_sqrt;
        var x2 = x2 / a2;
        document.getElementById('Equation').innerHTML = " Equation = " + a + "x&#178; + " + b + "x + " + c + "<br />";
        document.getElementById('x1').innerHTML = ' Alpha (x1) = ' + x1;
        document.getElementById('x2').innerHTML = ' Beta (x2) = ' + x2;
    }
}
result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a),
    result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
if {
    result =

}
}
