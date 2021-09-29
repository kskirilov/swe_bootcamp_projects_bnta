// 'use strict';
// const { Character, Mage, Warrior, Thief, } = require('./character');


//please unhighlight after highlighting and copying, cuz it makes it hard to see and edit for others


class Enemy{
    constructor(name, enemyAttack, health, goldReward, itemReward, type){
        this.name = name;
        this.health = health;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemReward = itemReward;
        this.type = type;  
        }
}

//okay yeah, I think we need to make subclasses of easy, medium and hard enemy cuz it makes it easier to edit the XP and gold they provide.

class EasyEnemy extends Enemy{
    constructor(name, enemyAttack=10, health=20, goldReward=5, itemTier=1, type="easy", XP){
        super(XP)
        this.name = name;
        this.health = health;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemTier = itemTier; //have low probability (like 5-10%)
        this.type = type;
        this.XP = 80;
    }
}
//XP = 80;


class MediumEnemy extends Enemy{
    constructor(name, enemyAttack, health, goldReward=10, itemTier=2, type="medium", XP){
        super(XP)
        this.name = name;
        this.health = health;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemTier = itemTier; //have low probability (like 5-10%)
        this.type = type;
        this.XP = 300;
    }
}

class HardEnemy extends Enemy{
    constructor(name, enemyAttack, health, goldReward=20, itemTier=3, type="hard", XP){
        super(XP)
        this.name = name;
        this.health = health;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemTier = itemTier; //have low probability (like 5-10%)
        this.type = type;
        this.XP = 500;
    }
}


// let turtle = new WeakEnemy("turtle");



//return all enemies which are easy?
//loop through all enemies and return easy ones

//access easyEnemies array

//access dictionary with all enemies but just pick easy ones


// let gremlin = new Enemy('gremlin', 15, 40, 80, 'medium');
// let centaur = new Enemy('centaur', 27, 50, 100, null, 'medium ');
// let elf = new Enemy('elf', 20, 60, 150, null, 'medium');


// battle sequence
// 1) Create the "battle" logic (HP tracking, X attacks Y and Y attacks X) //Lizzie and Ani


let easyEnemies = ["pixie", "goblin", 'gnome']; //if player between level 1-4 //give 15XP * level
// let mediumEnemies = [Elf, Gremlin, Centaur]; //if player between level 5-9 //give 20XP * level
// let strongEnemies = [Dragon, Wizard, Troll]; // if player level 10+ //give //give 








function doAttack(character, enemy) {
    enemy.health = Math.max(0, enemy.health - character.AD);
    return enemy.health;
};

function receiveAttack(character, enemy){
    return character.health = character.health - enemy.AD;
    
};

function generateEnemy(){

    let num = Math.floor(Math.random()*easyEnemies.length);
    let enemyName = easyEnemies[num];
    let enemy = new EasyEnemy(enemyName);

    // let pixie = new EasyEnemy('pixie');

    // let gnome = new EasyEnemy('gnome');

    // let goblin = new EasyEnemy('goblin');
    console.log('Enemy Stats:')
    console.log('Name:' + enemy.name);
    console.log('Health:'+ enemy.health);
    console.log('Attack Damage:' + enemy.enemyAttack);
    console.log('Gold:' + enemy.goldReward);
    console.log('XP:' + enemy.XP);


    return enemy;
}

// function attack(character, enemy){
//     //one round
//     doAttack(character, enemy);
//     if(enemy.health>0){
//         receiveAttack(character, enemy);
//         if(character.health>0){
//             console.log("Oh no! You've taken a hit from " + enemy.name + ". Now's your chance to fight back!");
//             checkCharacterStatus();
//             chooseFightAction();
//         }
//         else if(character.health<0){
//             console.log('You have died. :(');
//             quitGame();
//         }
//         else(console.log("error 1"));
//     }
//     else if(enemy.health<=0){
//         // chooseActivity();
//         // console.log('You have defeated the ' + enemy.name + '. You have received ' + enemy.goldReward + ' gold.');
//         // Number(character.gold) += Number(enemy.goldReward);
//         // console.log('You now have ' + Number(character.gold) + ' gold!');
        
//     }
//     else(console.log("error 2"));
// };       

module.exports = {
    easyEnemies,
    Enemy,
    EasyEnemy,
    MediumEnemy,
    HardEnemy,
    generateEnemy,
    doAttack,
    receiveAttack
}