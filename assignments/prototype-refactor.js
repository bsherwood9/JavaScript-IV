/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(SonAttributes) {
    super(SonAttributes);
    this.healthPoints = SonAttributes.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

class Humanoid extends CharacterStats {
  constructor(GSattributes) {
    super(GSattributes);
    this.team = GSattributes.team;
    this.weapons = GSattributes.weapons;
    this.language = GSattributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:

class Villian extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
  attack(obj) {
    if (obj.healthPoints <= 1) {
      return obj.destroy();
    } else {
      return --obj.healthPoints;
    }
  }
}

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
  stab(obj) {
    if (obj.healthPoints <= 1) {
      return obj.destroy();
    } else {
      return --obj.healthPoints;
    }
  }
}

const orc = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 8,
    height: 9
  },
  healthPoints: 10,
  name: "Dorian",
  team: "Mordor",
  weapons: ["Axe", "Shovel"],
  language: "Orcish"
});
const paladin = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 6,
    height: 7
  },
  healthPoints: 10,
  name: "Jeff",
  team: "Gondor",
  weapons: ["Sword", "Hatchet"],
  language: "Common"
});

console.log(orc.attack(paladin)); //9
console.log(orc.attack(paladin)); //8
console.log(paladin.stab(orc)); //9
console.log(paladin.stab(orc)); //8
console.log(orc.attack(paladin)); //7
console.log(orc.attack(paladin)); //6
console.log(paladin.stab(orc)); //7
console.log(paladin.stab(orc)); //6
console.log(orc.attack(paladin)); //5
console.log(orc.attack(paladin)); //4
console.log(paladin.stab(orc)); //5
console.log(paladin.stab(orc)); //4
console.log(orc.attack(paladin)); //3
console.log(orc.attack(paladin)); //2
console.log(paladin.stab(orc)); //3
console.log(paladin.stab(orc)); //2
console.log(orc.attack(paladin)); //1
console.log(orc.attack(paladin)); //dead
console.log(paladin.stab(orc)); //1
console.log(paladin.stab(orc)); //dead
