'use strict';

function calculateXP(){
    //calculate XP based on difficulty

}

function calculateCurrentHP(currentHP, enemyAD){
    currentHP = currentHP - enemyAD;
}

function attack(){

}

function consumePotion(currentHealth, gold){
    if(currentHealth<totalHealth && gold>20){
        if(currentHealth + 20 >= totalHealth){
            console.log("You've consumed a potion and your health is " + totalHealth + "/" + totalHealth);
        }
        else if(currentHealth + 20 < totalHealth){
            currentHealth = currentHealth + 20;
            console.log("You've consumed a potion and your health is " + currentHealth + "/" + totalHealth);
        }
    }
    else if(currentHealth == totalHealth){
        console.log("You already have full health");
    }
    else if(gold<20){
        console.log("You don't have enough gold for this operation");
    }

}

module.exports = {
    consumePotion
};

