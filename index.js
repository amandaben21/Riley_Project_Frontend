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
            
            let newBunny = new Bunny(bunny, bunny.attributes)
            
            document.querySelector('#bunny-container').innerHTML += newBunny.renderBunnyBoo()
        })
    })
}



function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value 
    const bioInput = document.querySelector('#input-bio').value
    const imageInput = document.querySelector('#input-image_url').value
    const feelingId = parseInt(document.querySelector('#feelings').value)
    postFetch(nameInput, bioInput,imageInput, feelingId)
}

function postFetch(name, bio, image_url, feeling_id) {
    //build body object outside of fetch
    const bodyData = {name, bio, image_url, feeling_id}
    
    //Post request
    fetch(website, {
        method: "POST",
        mode: 'cors',
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify(bodyData)
    })
    
    .then(response => response.json())
    .then(bunny => {
        console.log(bunny);
        const bunnyData = bunny.data
        let newBunny = new Bunny(bunnyData, bunnyData.attributes)
            
        document.querySelector('#bunny-container').innerHTML += newBunny.renderBunnyBoo()
    })
}