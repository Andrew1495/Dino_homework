const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
let park;
let dino1;
let dino2;
let dino3;
let dino4;
let dino5;
  beforeEach(function () {

    park = new Park("dino land", 5);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Velociraptor', 'carnivore', 35);
    dino3 = new Dinosaur('Ankylosaurus', 'herbivore', 25);
    dino4 = new Dinosaur('Diplodocus', 'herbivore', 30);
    dino5 = new Dinosaur('Gallimimus', 'omnivore', 10);
    dino6 = new Dinosaur('Gallimimus', 'omnivore', 10);
    dino7 = new Dinosaur('Gallimimus', 'omnivore', 10);
    dino8 = new Dinosaur('Gallimimus', 'omnivore', 10);
    dino9 = new Dinosaur('Gallimimus', 'omnivore', 10);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "dino land")
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinos
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1)
    const actual = park.dinos
    assert.deepStrictEqual(actual, [dino1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    park.removeDino(dino2)
    const actual = park.dinos
    assert.deepStrictEqual(actual, [dino1,dino3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    const actual = park.peopleLikeDino() 
    assert.strictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
      park.addDino(dino1)
      park.addDino(dino2)
      park.addDino(dino3)
      park.addDino(dino4)
      park.addDino(dino5)
      park.addDino(dino6)
      park.addDino(dino7)
      park.addDino(dino8)
      park.addDino(dino9)
      const actual = park.bySpecies("Gallimimus")
      assert.deepStrictEqual(actual, [dino5,dino6,dino7,dino8,dino9])

  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    const actual = park.vistPerDay()
    assert.strictEqual(actual, 85)
  });


  it('should be able to calculate the total number of visitors per year', function(){
  park.addDino(dino1)
  park.addDino(dino2)
  const actual = park.vistPerYear()
  assert.strictEqual(actual, 31025)
  });

  it('should be able to calculate total revenue for one year', function(){;
  park.addDino(dino1)
  park.addDino(dino2)
  const actual = park.revenueYear()
  assert.strictEqual(actual, 155125)
});
  
  it('should be able to remove dinos by species', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    park.addDino(dino4)
    park.addDino(dino5)
    park.addDino(dino6)
    park.addDino(dino7)
    park.addDino(dino8)
    park.addDino(dino9)
    park.removeBySpecies("Gallimimus")
    const actual = park.dinos
    assert.deepStrictEqual(actual,[dino1, dino2, dino3, dino4])
});


  
it('Should be able to create an object that stores the amount of diet types', function(){
  park.addDino(dino1)
  park.addDino(dino2)
  park.addDino(dino3)
  park.addDino(dino4)
  park.addDino(dino5)
  park.addDino(dino6)
  park.addDino(dino7)
  park.addDino(dino8)
  park.addDino(dino9)
  
  const actual = park.dinosDiet()
  assert.deepStrictEqual(actual,{carnivore: 2, herbivore: 2, omnivore: 5})
});


});
