//veranderd de tekst in een paragraaf
function myFunction() {
    document.getElementById("changepara").innerHTML = "Paragraph changed.";
}

// rekenmachine met 2 inputvelden en 1 uitkomstveld
function rekenUit() {
    var x = document.getElementById("getal1").value;
    var y = document.getElementById("getal2").value;
    var uitkomst = parseInt(x) + parseInt(y);
    document.getElementById("uitkomst").innerHTML = uitkomst;
}

//veranderd de kleur van de achtergrond
function changeColor() {
    document.body.style.backgroundColor = "red";
}

function changeColorBack() {
    document.body.style.backgroundColor = "white";
}