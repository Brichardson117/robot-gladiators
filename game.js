//get player name for their robor
let playerName = window.prompt("What is your robot's name?");
//robots stats
let playerHealth = 100;
let playerAttack = 10;

console.log(`Player Name: ${playerName} Player Health: ${playerHealth} Player Attack: ${playerAttack}`);

//first enemy's name
let enemyName = "Roborto";
// enemy stats
let enemyHealth = 50;
let enemyAttack = 12;

// fight function expression
let fight = function() {
  //notify player that the fights begun
  window.alert("Welcome to the Robot Gladiators")

  //enemy health after player attaks
  enemyHealth = enemyHealth - playerAttack;

  //console log the attack with the enemys updated stats
  console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

  //if enemys health is less than or equal to 0, send an alert that the enemy has died
  if(enemyHealth <= 0 ) {
    window.alert(`${enemyName} has died!`)
  } else {
    // if the enemy's health is greater than 0, send an alert of the enemys current health
    window.alert(`${enemyName} still has ${enemyHealth} health left.`)
  }

// players health after being attacked by enemy
  playerHealth = playerHealth - enemyAttack;

  console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`);

  //if player health is lesst than or equal to 0, send an alert that players robot has died
  if(playerHealth <= 0) {
    window.alert(`${playerName} has died!`)
  } else {
    // if the player health is greater than 0, send alert of players current stats
    window.alert(`${playerName} has ${playerHealth} health left.`);
  }

};

fight();
