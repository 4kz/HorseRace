class Character{
    constructor(id, name, strength, stamina, bet, image, position){
        this.id = id;
        this.bet = bet;
        this.name = name;
        this.image = image;
        this.stamina = stamina;
        this.strength = strength;
        this.position = position;

        this.active = true;
    }

    move(random) {
        return this.speed * this.strength * random;
    }

    getDisplayInfo(){
        return {
            id: this.id,
            name: this.name,
            image: this.image,
            stamina: this.stamina,
            strength: this.strength,
            bet: this.bet
        };
    }

    toggleActive(){
        this.active = !this.active;
    }

    getId() {
        return this.id;
    }

    getBet(){
        return this.bet;
    }

    getName(){
        return this.name;
    }

    getImage(){
        return this.image;
    }

    getStamina(){
        return this.stamina;
    }

    getStrength(){
        return this.strength;
    }

    getPosition(){
        this.position;
    }

    isActive(){
        return this.active;
    }
}

const characterTemplate = ({id, name, strength, stamina, image, bet}) => `
    <div id="character-${id}" class="col-md-3 mx-auto">
        <div class="card mx-auto" style="width: 18rem;">
            <img onClick="ToggleCard(${id})" src="${image}" class="card-img-top img-thumbnail" alt="character-${id}"></img>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <ul>
                    <li>Strength: ${strength}</li>
                    <li>Stamina: ${stamina}</li>
                    <li>Bet: ${bet}</li>
                </ul>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Puntata</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                </div>
            </div>
        </div>
    </div>
`;
