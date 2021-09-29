// Essential:
// 1) Create the "battle" logic (HP tracking, X attacks Y and Y attacks X) //Lizzie and Ani
//XP to levels calculation (level * 100 * 1.6)
// 2) Make logic for choosing weak, medium or strong enemies based on character level // Lizzie and Ani
// 3) Write the game progress in a JSON file so that it can be retrieved //Bianca
// 4) Modify player class, create instance and adjust it based on user input from main.js //Kras

// -) If we have time, write logic for when items are dropped by enemies and define a few item options. if we want to keep it simple we can maybe just make enemies drop potions and gold.
// -) If we still have time, we can implement "special abilities" and "mana" for characters

//You can always enter "quit" to exit the game
//Game should be saved after each move/interaction, or at least at key points.
'use strict';
const fs = require('fs');
const prompt = require('prompt-sync')();
const { Mage, Thief, Warrior, calculateAD, calculateTotalHP, calculateLevel } = require("./character");
const { easyEnemies, Enemy, EasyEnemy, MediumEnemy, HardEnemy, generateEnemy, doAttack, receiveAttack } = require('./enemy');
const { consumePotion } = require('./battle');
const { read, write, del } = require("./save.js");


const content = JSON.stringify(obj, null, 2);
fs.writeFile('save.json', content, { flag: 'a' }, (err) => {
    if (err) throw err;
    console.log("Data written to save.json");
});

write(obj);

let character = "";
let activity = "";
let name = "";
let xp = 0;
let enemy = "";
// let gold = "";
// let player = ""
//checkJSON();


console.log("Welcome to Dungeon Fortress.\n")
startNewGame();
selectCharacterClass();
// setTimeout(selectCharacterClass, 2300);
console.log("In order to acquire gold, you need to kill creatures that you encounter along your way...");
console.log("...Use your gold to replenish your health and avoid dying as creatures get stronger.");
console.log("Let's begin your journey. You will learn the rest along the way.");
chooseActivity();


function startNewGame(){
    name = prompt('Enter your character name? ');
    // player.name = name;
    displayName();
    readStory();

    function displayName(){
        // console.log(`Welcome ${name}...`);
        console.log("Welcome " + name + " ...");
    }
    // setTimeout(displayName, 400);

    function readStory(){
        console.log("You are currently in Strashna Forest and your goal is to slay the enemies that come your way.");
    }
    // setTimeout(readStory, 1200);
}



//receiveAttack(character.HP; enemy.AD)



function selectCharacterClass(){
    const characterClass = prompt('Select your character class [Mage] [Warrior] [Thief]: '); //or type s.mage , s.warrior or s.thief, or write q for more information on the classes
    
    //cheap solution but hey, works for now :D -- should ideally search through the classes in character.js
    //use switch
    if(characterClass.toLowerCase() === "mage"){ //case1: "mage"
        character = new Mage(name);

    }
    else if(characterClass.toLowerCase() === "warrior"){ //case2: "warrior"
        character = new Warrior(name);

    }
    else if(characterClass.toLowerCase() === "thief"){ //case3: "thief"
        character = new Thief(name);
    }
    //case4: "s.mage"
    //case5: "s.warrior"
    //case6: "s.thief"

    else{
        console.log("Invalid class: " + characterClass + " doesn't exist or is spellt incorrectly.")
        selectCharacterClass();
    }

    console.log("Great choice! The " + character.type + " is famous for it's strength in the kingdom!");
    console.log("Your starting attributes are: \n[Character name: " + character.name + "] \n[Character class: " + character.type + "] \n[Attack Damage (AD): " + character.AD + "] \n[Health Points (HP): " + character.currentHP + "/" +character.totalHP + "] \n[Experience Points (XP): " + character.XP + "] \n[Gold: "+ character.gold + "]");
}

//calling function
//receiveAttack(character.HP);


function chooseActivity(){
    console.log("What would you like to do now?")
    console.log("c - continue"); //80% chance of enemy, (15% chance of helper), 5% chance of nothing
    // console.log("i - view inventory");
    console.log("s - check status (AD, HP, XP, level)"); //Attack Damage (AD): 20 
    console.log("r - consume a potion to recover HP (20G for 20HP)") 
    console.log("q - quit the game")
    activity = prompt();
    switch(activity) {
        case 'c':
            console.log("You've encountered an enemy"); //could also encounter (2) nothing or (3) encounter a merchant/helper
            enemy = generateEnemy(); //generate enemy and print it's characteristics: Lizzie and Ani
            console.log("Their health is: " + enemy.health);
            chooseFightAction();
            break;

        case 's':
            checkCharacterStatus();
            break;

        case 'r':
            console.log("You've consumes a potion for 20G and recovered 20 HP!")
            chooseActivity();            
            break;

        case 'q':
            quitGame(); 
            break;

        default:
            console.log("The command " + activity + " is incorrect. Please use only letters without spaces or special characters");
            chooseActivity();
            break;
    }

}

function checkCharacterStatus(){
    console.log("Your statistics are: ")
    console.log("Attack Damage (AD): " + character.AD);
    console.log("Health Points (HP): " + character.currentHP + "/" + character.totalHP);
    console.log("Experience Points (XP): " + character.XP);
    console.log("Level: " + calculateLevel(character.XP)); //can be calculated based on total experience.
    chooseActivity();
}


function chooseFightAction(){
    console.log("What would you like to do next?")
    console.log("a - attack");
    console.log("f - flee battle");
    console.log("r - consume potion (20G for 20HP)");
    const action  = prompt();

    if(action === "a"){
        attack(character, enemy); //Ani, Lizzie
    }
    else if(action==="f"){
        console.log("You've fled the fight")
        chooseActivity(); //done

    }
    else if(action==="r"){
        //consumePotion(character.currentHP, gold); //Kras
        console.log("You've consumes a potion for 20G and recovered 20 HP!")
        chooseActivity();
    }
    else{
        "incorrect command";
    }
}

function attack(character, enemy){
    enemy.health = enemy.health - character.AD;
    console.log("You've attacked the enemy and dealt " + character.AD + " damage.")
    if(enemy.health>0){
        console.log("The enemy health is now: "+ enemy.health);
        character.health = character.health - enemy.AD;
        console.log("You have been attacked by the enemy and it dealt " + enemy.AD + " damage.")
        console.log("Your health is now "+ character.health);
        if(character.health>0){
            chooseFightAction();
        }
        else{
            console.log("You are dead.")
        }
    }
    else if(enemy.health<0){
        console.log("You have slain the enemy;");
        chooseActivity();
    }
}
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//  }

function quitGame(){
    let choice = prompt("Are you sure you want to quit the game (your progress will be saved)? (Y/N): ")
    if(choice.toLowerCase()==="y"){
        console.log("game has exited");
        process.exit();
    }
    else{
        // continue; //might have to make it "chooseActivity()"
    }
}