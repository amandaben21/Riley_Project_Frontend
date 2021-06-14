class Bunny {
    constructor(bunny, bunnyAttributes){
        this.id = bunny.id
        this.image_url = bunnyAttributes.image_url
        this.name = bunnyAttributes.name
        this.age = bunnyAttributes.age
        this.gender = bunnyAttributes.gender
        this.color = bunnyAttributes.color
        this.weight = bunnyAttributes.weight
        this.bio = bunnyAttributes.bio
        this.breed = bunnyAttributes.breed
        Bunny.all.push(this);
    }
    
    renderBunnyCard() {
        
        return `
            <span class="childCard" id=${this.id}>
            <div class="card" style="width: 18rem;">
                <img src="${this.image_url}" height="200" width="250">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.bio}</p>
                
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button data-id=${this.id} id="delete-bunny-button" type="button" class="btn btn-sm btn-outline-secondary">Delete Bunny</button> 
                        </div>
                        <small class="text-muted">Breed: ${this.breed.name}</small>
                    </div>
                </div>
            </div>
        `
        
        
        
        
        
        
        
        
        //return `     
        //<div data-id=${this.id}>
            //<img src=${this.image_url} height="200" width="250">
            //<p>
                //<h3>Name:${this.name}</h3>
                //<h6>Age: ${this.age}</h6>
                //<h6>Gender: ${this.gender}</h6>
                //<h6>Color: ${this.color}</h6>
                //<h6>Weight: ${this.weight}</h6>
                //<h6>Bio: ${this.bio}</h6>
                //<h6>Breed: ${this.breed.name}</h6>
            //</p>
            //<div class="btn-group">
              //<button data-id=${this.id} id="delete-bunny-button" type="button" class="btn btn-sm btn-outline-secondary">Delete Bunny</button>
            //</div>
            
        //</div>
        //<br><br>`;
    }
}
Bunny.all = [];