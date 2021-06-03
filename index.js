const website = "http://localhost:3000/api/v1/bunnies"

document.addEventListener('DOMContentLoaded', () => {
    //fetch and load bunny
    getBunnies()

    const createBunnyForm = document.querySelector("create-bunny-form")
    createBunnyForm.addEventListener("submit",(e) => createFormHandler(e))
})

function getBunnies() {
    fetch(website)              //Get request    
    .then(response => response.json())
    .then(bunnies => {
        bunnies.data.forEach(bunny => {
            render(bunny)
        })
    })
}

function render(bunny){
    const bunnyMarkup =         //manipulating the DOM
    `<div data-id=${bunny.id}>
        <img src=${bunny.attributes.image_url} height="200" width="250">
        <h3>${bunny.attributes.name}</h3>
        <p>${bunny.attributes.bio}</p>
        <p>Adopted by: ${bunny.attributes.person.name}</p>
        <button data-id=${bunny.id}>edit</button>
    </div> 
    <br><br>`;
    document.querySelector('#bunny-container').innerHTML += bunnyMarkup     //updating the bunny container
}

function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value 
    const bioInput = document.querySelector('#input-bio').value
    const imageInput = document.querySelector('#input-url').value
    const personId = parseInt(document.querySelector('#people').value)
    postFetch(nameInput, bioInput,imageInput, personId)
}

function postFetch(name, bio, image_url, person_id) {
    //build body object outside of fetch
    const bodyData = {name, bio, image_url, person_id}
    
    //Post request
    fetch(website, {
        method: "POST",
        headers: {"Content-Type: "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(bunny => {
        console.log(bunny);
        const bunnyData = bunny.data
        render(bunnyData)
    })
    
}