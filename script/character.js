class Character{
    constructor(name, strength, stamina, bet, image){
        this.bet = bet;
        this.name = name;
        this.image = image;
        this.stamina = stamina;
        this.strength = strength;
    }

    move(random) {
        return this.speed * this.strength * random;
    }

    getJson(){
        return {
            "bet" : this.bet,
            "name" : this.name,
            "image" : this.image,
            "stamina" : this.stamina,
            "strength" : this.strength
        }
    }
}