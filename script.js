
const poruciBtn = document.getElementById("poruciBtn");

if (poruciBtn) {

    poruciBtn.addEventListener("click", function () {

        const ime = document.getElementById("ime").value;
        const pizza = document.getElementById("pizza").value;

        document.getElementById("rezultat").innerHTML =
            "Hvala " + ime + "! Poručili ste " + pizza + " pizzu.";

    });

}


const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.add("darkMode");

    });

}

const lightBtn = document.getElementById("lightBtn");

if (lightBtn) {

    lightBtn.addEventListener("click", function () {

        document.body.classList.remove("darkMode");

    });

}


const dodajKomentar = document.getElementById("dodajKomentar");

if (dodajKomentar) {

    dodajKomentar.addEventListener("click", function () {

        const tekst = document.getElementById("komentarInput").value;

        const noviKomentar = document.createElement("li");

        noviKomentar.innerHTML = tekst;

        document.getElementById("listaKomentara").appendChild(noviKomentar);

    });

}


const viseBtn = document.getElementById("viseBtn");

if (viseBtn) {

    viseBtn.addEventListener("click", function () {

        document.getElementById("viseTeksta").innerHTML =
            "Naš restoran postoji već 10 godina i koristi samo sveže sastojke!";

    });

}


const posaljiBtn = document.getElementById("posaljiBtn");

if (posaljiBtn) {

    posaljiBtn.addEventListener("click", function () {

        const ime = document.getElementById("imeKontakt").value;

        document.getElementById("kontaktRezultat").innerHTML =
            "Poruka uspešno poslata. Hvala, " + ime + "!";

    });

}