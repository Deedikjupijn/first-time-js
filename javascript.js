function myFunction() {
    document.getElementById("changepara").innerHTML = "Paragraph changed.";
}

function rekenUit() {
    var x = document.getElementById("getal1").value;
    var y = document.getElementById("getal2").value;
    var uitkomst = parseInt(x) + parseInt(y);
    document.getElementById("uitkomst").innerHTML = uitkomst;
}