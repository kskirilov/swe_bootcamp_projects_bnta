const {Enemy, doAttack, generateEnemy} = require('./enemy');
const {Mage, Character} = require('./character');

// function doAttack(character, enemy) {
//     enemy.health = Math.max(0, enemy.health - character.AD);
//     return enemy.health;
// };

test ('testing health', () => {
    let mage = new Mage();
    expect(doAttack(mage, pixie)).toBe(-20);
});
// function generateEnemy(){
//     let num = Math.floor(Math.random()*easyEnemies.length);
//     let enemy = easyEnemies[num];
//     return enemy;
// }
