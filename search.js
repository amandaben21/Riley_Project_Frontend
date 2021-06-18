
document.addEventListener("click", function(e){
    
    filterBunny(e)
    const searchBar = document.querySelector("#search-bar")
    searchBar.addEventListener("submit",(e) =>filterBunny(e))
})

function filterBunny(e) {
    e.preventDefault();
    let bunnies = Bunny.all
    console.log(bunnies) 
    let filteredBunny = bunnies.filter( bunny => {
        bunny.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    });
    
    bunnyListArea.innerHTML = ""
    filteredBunny.forEach(b => {
        b.addBunny()
    })
}


