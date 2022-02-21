var productsLink = document.querySelectorAll(".cat-images");

productsLink.forEach(element => {
    element.addEventListener("click", () => {
        window.location.href = "../listing/listing.html";
    });
});