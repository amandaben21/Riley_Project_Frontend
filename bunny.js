class Bunny {
    constructor(bunny, bunnyAttributes){
        this.image_url = bunnyAttributes.image_url
        this.id = bunny.id
        this.name = bunnyAttributes.name
        this.age = bunnyAttributes.age
        this.gender = bunnyAttributes.gender
        this.color = bunnyAttributes.color
        this.weight = bunnyAttributes.weight
        this.bio = bunnyAttributes.bio
        this.breed = bunnyAttributes.breed
        Bunny.all.push(this)
    }
    
    renderBunnyCard(){
        return `     
        <div data-id=${this.id}>
            <img src=${this.image_url} height="200" width="250">
            <p>
                <h3>Name:${this.name}</h3>
                <h6>Age: ${this.age}</h6>
                <h6>Gender: ${this.gender}</h6>
                <h6>Color: ${this.color}</h6>
                <h6>Weight: ${this.weight}</h6>
                <h6>Bio: ${this.bio}</h6>
                <h6>Breed: ${this.breed.name}</h6>
            </p>
            <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
}
Bunny.all = [];