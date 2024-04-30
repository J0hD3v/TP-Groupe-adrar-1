const btn_envoyer_form = document.getElementById("btn_envoyer_form");

btn_envoyer_form.addEventListener("click", function addMessage() {

    /* recuperation donnees */
    let nom = document.getElementById("form_nom").value;
    let message = document.getElementById("form_message").value;
    /* let date = "30/04/2024"; */
    let date = new Date();
    date = date.getDate() + "/" + Number(date.getMonth()+1) + "/" + date.getFullYear();

    /* creation nouvelle carte */
    let div_message = document.createElement("div");
    div_message.className = "container";

    let image = document.createElement("img");
    let h3_nom = document.createElement("h3");
    let h4_date = document.createElement("h4");
    let hr_barre = document.createElement("hr");
    let p_message = document.createElement("p");

    image.src = "../images/photo1.jpg";
    image.alt = "photo";
    h3_nom.textContent = nom;
    h4_date.textContent = date;
    p_message = message;

    let emplacement = document.getElementsByClassName("espace_messages")[0];
    emplacement.append(div_message);
    div_message.append(image,h3_nom,h4_date,hr_barre,p_message);
})


/* popup */

const btn_popup_new = document.getElementById("btn_popup_new");
const popup_new = document.getElementById("popup_new");

btn_popup_new.addEventListener("click", function display_popup_new() {
    if(popup_new.style.display != "flex") {
        popup_new.style.display = "flex";
        btn_popup_new.innerText = "CLOSE";
    }
    else {
        popup_new.style.display = "none";
        btn_popup_new.innerText = "NEW";
    }
})
