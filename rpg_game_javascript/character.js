'use strict';
// import { Inventory } from "./inventory"; //please also don't use "import" <- again, ask kras if help needed :D
//sorry :( 
class Character{ //please don't use "export" :D <- Ask kras if you don't know what to do (how to import it)
    constructor(name, type, AD, currentHP, totalHP, XP=0, gold=0){     
        this.gold = 0;
        this.XP = XP;
        this.name = name;
        if (this.name === '') {
          this.name = 'Character';
        }
    }
}

class Mage extends Character{
    constructor(name, type, AD, currentHP, totalHP, XP, gold) {
        super(name, type, AD, currentHP, totalHP, XP, gold);
        this.type = "Mage";
        this.AD = 40;
        this.currentHP = 100;
        this.totalHP = 100;
        this.XP = 0;
        this.gold = 0;
    }
}

class Warrior extends Character{
    constructor(name, type, AD, currentHP, totalHP, XP, gold) {
        super(name, type, AD, currentHP, totalHP, XP, gold);
        this.type = "Warrior";
        this.AD = 20;
        this.currentHP = 200;
        this.totalHP = 200;
        // this.gold = gold;
    }
}
// const magekras = new Mage();
// console.log(magekras);
// console.log("The output of this is: " + magekras.AD);


class Thief extends Character{
    constructor(name, type, AD, currentHP, totalHP, XP, gold) {
        super(name, type, AD, currentHP, totalHP, XP, gold);
        this.type = "Thief";
        this.AD = 30;
        this.currentHP = 150;
        this.totalHP = 150;
    }
}

function attackEnemy(){
    //
}
function flee(){
    //
}

function calculateLevel(XP){
    let level = 0;
    if(XP<=18){
        level = 1;
    }
    if(XP>18 && XP<=54){
        level = 2;
    }
    if(XP>54 && XP<=108){
        level = 3;
    }
    if(XP>108 && XP<=180){
        level = 4;
    }
    if(XP>180 && XP<=270){
        level = 5;
    }
    if(XP>270 && XP<=378){
        level = 6;
    }
    if(XP>378 && XP<=504){
        level = 7;
    }
    if(XP>504 && XP<=648){
        level = 8;
    }
    if(XP>648 && XP<=810){
        level = 9;
    }
    if(XP>810){
        level = 10;
    }
        
return level;

}


function calculateTotalHP(totalHP, characterLevel){
    HP = HP + level*2.9;
    return Math.floor(HP);
    // 102.7
    // 108.10000000000001
    // 116.20000000000002
    // 127.00000000000001
    // 140.5
    // 156.7
    // 175.6
    // 197.2
    // 221.5
    // 248.5
}




function calculateAD(attack, characterLevel){
    attack = attack + level*1.2;
    return Math.floor(attack);
    // 41.2
    // 43.6
    // 47.2
    // 52
    // 58
    // 65.2
    // 73.60000000000001
    // 83.2
    // 94
    // 106
}

module.exports = {
    Character,
    Mage,
    Warrior,
    Thief,
    calculateTotalHP, 
    calculateLevel, 
    calculateAD
};