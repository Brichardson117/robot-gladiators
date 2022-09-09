//get player name for their robot
let playerName = window.prompt("What is your robot's name?");
//robots stats
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

console.log(
  `Player Name: ${playerName} Player Health: ${playerHealth} Player Attack: ${playerAttack}`
);

//first enemy's name
let enemyName = ['Roborto', 'Amy Android', 'Robo Tumble']
// enemy stats
let enemyHealth = 50;
let enemyAttack = 12;

// fight function expression
let fight = function (enemyName) {
  //notify player that the fights begun
  window.alert("Welcome to the Robot Gladiators");

  let promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose."
  );

  if (promptFight === "fight" || promptFight === "FIGHT") {
    //enemy health after player attaks
    enemyHealth = enemyHealth - playerAttack;

    //console log the attack with the enemys updated stats
    console.log(
      `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`
    );
    //if enemys health is less than or equal to 0, send an alert that the enemy has died
    if (enemyHealth <= 0) {
      window.alert(`${enemyName} has died!`);
    } else {
      // if the enemy's health is greater than 0, send an alert of the enemys current health
      window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    // players health after being attacked by enemy
    playerHealth = playerHealth - enemyAttack;

    console.log(
      `${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`
    );

    //if player health is lesst than or equal to 0, send an alert that players robot has died
    if (playerHealth <= 0) {
      window.alert(`${playerName} has died!`);
    } else {
      // if the player health is greater than 0, send alert of players current stats
      window.alert(`${playerName} has ${playerHealth} health left.`);
    }
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm that the player wanted to skip the fight
    let confirmSkip = window.confirm("Are you sure you'd like to skip?");

    if (confirmSkip === true) {
      //subtract from players money if skip is true
      playerMoney = playerMoney - 2;
      //send alert that player decided to skip and the money they have left
      window.alert(
        `${playerName} has decided to skip this fight. You have ${playerMoney} remaining. Goodbye!`
      );
    } else {
      // player decides to not skip, start the fight
      fight();
    }
  } else {
    //player enters invalid option for skip or fight
    window.alert("You need to chose a valid option. Try again!");
  }
};

//loops through enemies for player to fight all enemys in fight function 
for(let i = 0; i < enemyName.length; i++){
  fight(enemyName[i]);
};
