class Bunny {
    constructor(bunny, bunnyAttributes){
        this.id = bunny.id
        this.name = bunnyAttributes.name
        this.bio = bunnyAttributes.bio
        this.image_url = bunnyAttributes.image_url
        this.person_id = bunnyAttributes.person_id
        Bunny.all.push(this)
    }
    renderBunnyBoo(){
        return `     
        <div data-id=${this.id}>
            <img src=${this.image_url} height="200" width="250">
            <h3>${this.name}</h3>
            <p>${this.bio}</p>
            <p>Adopted by: ${this.person.name}</p>
            <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
}
Bunny.all = [];