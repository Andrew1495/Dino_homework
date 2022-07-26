const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinos = [];
}

Park.prototype.addDino = function(dino){
    this.dinos.push(dino)
}

Park.prototype.removeDino = function(dino){
index = this.dinos.indexOf(dino);
this.dinos.splice(index, 1)
}

Park.prototype.peopleLikeDino = function(){
    let highest = 0;
    let found;
    for (let index = 0; index < this.dinos.length; index++) {
        dino = this.dinos[index]
        if (dino.guestsAttractedPerDay > highest)
            found = dino
            highest = dino.guestsAttractedPerDay
    }
return found
}

Park.prototype.bySpecies = function(species){
    let allSpecies = []
    for (const dino of this.dinos) {
        if (dino.species === species){
            allSpecies.push(dino)
        }
    }
    return allSpecies
}


Park.prototype.vistPerDay = function(){
    let sum = 0
for (const dino of this.dinos) {
    sum += dino.guestsAttractedPerDay
    
}
return sum
}

Park.prototype.vistPerYear = function(){
sum = this.vistPerDay() * 365
return sum
}


Park.prototype.revenueYear = function (){
    sum = this.vistPerYear() * this.ticketPrice
    return sum
}

Park.prototype.removeBySpecies = function(species){
    let newDinos = []
    for (const dino of this.dinos) {
        if(dino.species !== species){
            newDinos.push(dino)
        }
    }
    this.dinos = newDinos
}

Park.prototype.dinosDiet = function(){
    diet = {
        carnivore: 0,
        herbivore: 0,
        omnivore: 0
    }

    for (const dino of this.dinos) {
        if(dino.diet === "carnivore"){
            diet.carnivore ++;
        }else if (dino.diet === "herbivore"){
            diet.herbivore ++;
        }else if (dino.diet === "omnivore"){
            diet.omnivore ++;
        }
        
    }
    return diet
}


module.exports = Park;