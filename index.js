const website = "http://localhost:3000/api/v1/bunnies"

document.addEventListener('DOMContentLoaded', () => {
    getBunnies()
})

function getBunnies() {
    fetch(website)
    .then(response => response.json())
    .then(bunnies => {
        bunnies.data.forEach(bunny => {
            const bunnyMarkup = 
            `<div data-id=${bunny.id}>
                <img src=${bunny.attributes.image_url} height="200" width="250">
                <h3>${bunny.attributes.name}</h3>
                <p>${bunny.attributes.bio}</p>
                <p>Adopted by: ${bunny.attributes.person.name}</p>
                <button data-id=${bunny.id}>edit</button>
            </div> 
            <br><br>`

            document.querySelector('#bunny-container').innerHTML += bunnyMarkup
        })
    })
}