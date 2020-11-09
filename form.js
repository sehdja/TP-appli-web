

function validation() {
    var error = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";

    var champsList = document.querySelectorAll(".inputAW");

    champsList.forEach(function (champItem) {
        if (champItem.value.length < 5) {
            error += "la saisie du " + document.querySelector("[for='"+champItem.id+"']").textContent + " est obligatoire"+ "<br/>";
        }

    };


    if (error !=0) {
        document.getElementById("error").innerHTML = error;
    }

    else { document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;}

    console.log(error);
    console.log(resultat);
    return false;

}
