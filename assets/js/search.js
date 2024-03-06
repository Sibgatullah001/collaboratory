qr = str => document.querySelector(str)

let search = qr(".search");
let searchInput = qr(".search_bar input");

searchInput.addEventListener('click', (e) => {
    console.log(e)
})
console.log(searchInput)

// searchInput.addEventListener('change', (e) => {
//     console.log(e)
//     search.classList.remove('active')

// })