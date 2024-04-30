const button = document.getElementById("btn_test");

button.addEventListener("click", function easterEgg() {
    const existingPopup = document.getElementById("easterEggPopup");
    if(existingPopup) {
        existingPopup.remove();
    }
    else {
        let easterEggPopup = document.createElement("div");
        easterEggPopup.id = "easterEggPopup";

        let philippe = document.createElement("img");
        philippe.id = "imgPhilippe";
        philippe.src = "../images/philippe - sans micro sans bras.png";

        let bras = document.createElement("img");
        bras.id = "imgPhilippeBras";
        bras.src = "../images/philippe - bras.png";

        let divMicro = document.createElement("div");
        divMicro.id = "divPhilippeMicro";
        let micro = document.createElement("img");
        micro.id = "imgPhilippeMicro";
        micro.src = "../images/micro.png";


        document.body.append(easterEggPopup,divMicro);
        /* easterEggPopup.append(philippe,bras,micro); */
        divMicro.append(micro);
        document.body.append(philippe,bras);
    }
})