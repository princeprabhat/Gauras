




function showCard() {
    let card = document.getElementById("card-milk-pricing");

    if (card.style.display === "none") {
        card.style.display = "flex";
    }
    else {
        card.style.display = "none";
    }
}