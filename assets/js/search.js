qr = str => document.querySelector(str)

let search = qr(".search");
let suggestion = qr(".suggestion")
let searchInput = qr(".search_bar input");
let overlay = qr(".overlay");

searchInput.addEventListener('click', () => {
    search.classList.add('active');
    suggestion.style.display = "block";
    overlay.style.display = "block";
})
overlay.addEventListener('click', (e) => {
    console.log("overlay")
    search.classList.remove('active');
    suggestion.style.display = "none";
    overlay.style.display = "none";
})


