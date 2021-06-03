const website = "http://localhost:3000/api/v1/bunnies"

document.addEventListener('DOMContentLoaded', () => {
    getBunnies()

    const createBunnyForm = document.querySelector("create-bunny-form")
    createBunnyForm.addEventListener("submit",(e) => createFormHandler(e))
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

function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value 
    const bioInput = document.querySelector('#input-bio').value
    const imageInput = document.querySelector('#input-url').value
    const personId = parseInt(document.querySelector('#people').value)
    postFetch(nameInput, bioInput,imageInput, personId)
}

function postFetch(name, bio, image_url, personId) {
    console.log(name, bio, image_url, personId)
    fetch(website, {
        method: "POST"
        headers:
    })
    
}