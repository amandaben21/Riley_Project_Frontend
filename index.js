const website = "http://localhost:3000/api/v1/bunnies"



document.addEventListener('DOMContentLoaded', () => {
    //fetch and load bunny
    getBunnies()
    const createBunnyForm = document.querySelector("#create-bunny-form")
    createBunnyForm.addEventListener("submit",(e) => createFormHandler(e))
})

document.addEventListener("click", function(e) {
    const bunnyCard = document.getElementById(`${e.target.dataset.id}`)
  
    if(e.target.matches("#delete-bunny-button")) {
      e.preventDefault()
      deleteBunny(e.target.dataset.id)
      bunnyCard.remove(bunnyCard)
    }
  })



  function getBunnies() {
    fetch(website)              //Get request    
    .then(response => response.json())
    .then(bunnies => {
        bunnies.data.forEach(bunny => {
            
            let newBunny = new Bunny(bunny, bunny.attributes)
            
            document.querySelector('#bunny-container').innerHTML += newBunny.renderBunnyCard()
        })
    })
}


function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value 
    const ageInput = parseInt(document.querySelector('#input-age').value)
    const genderInput = document.querySelector('#input-gender').value
    const colorInput = document.querySelector('#input-color').value
    const weightInput = document.querySelector('#input-weight').value   
    const bioInput = document.querySelector('#input-bio').value
    const imageInput = document.querySelector('#input-url').value
    const breedId = parseInt(document.querySelector('#breeds').value)
    postFetch(nameInput, ageInput, genderInput, colorInput, weightInput, bioInput, imageInput, breedId)
}

function postFetch(name, age, gender, color, weight, bio, image_url, breed_id) {
    //build body object outside of fetch
    const bodyData = {name, age, gender, color, weight, bio, image_url, breed_id}
    
    //Post request
    fetch(website, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    
    .then(response => response.json())
    .then(bunny => {
        console.log(bunny);
        const bunnyData = bunny.data
        let newBunny = new Bunny(bunnyData, bunnyData.attributes)
    
        document.querySelector('#bunny-container').innerHTML += newBunny.renderBunnyCard();

        this.location.reload()

    })
}

function deleteBunny(id) {

    fetch(`${website}/${id}`, {
      method: "DELETE" 
    })
    .then(response => response.json())
    .then(response => console.log(response))
 
}
