let player;

function Player(classType, health, mana, strength, agility, speed){
	this.classType = classType;
	this.health = health;
	this.mana = mana;
	this.strength = strength;
	this.agility = agility;
	this.speed = speed;    

}

let PlayerMoves = {
	calcAttack:function(){
		//who attack first? 
		let getPlayerSpeed = player.speed
		let getEnemySpeed = enemy.speed;
		//Player attack
		let playerAttack = function(){
		let calcBaseDamage;
		if (player.mana > 0) {
			calcBaseDamage = player.strength * player.mana / 1000;

		}else {
			calcBaseDamage = player.strength * player.agility / 1000;

		}
		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage;
		// Number of hits
		let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
		let attackValue = [calcBaseDamage, numberOfHits];
		return attackValue;
	}
	//Enemy attack
	    let enemyAttack = function(){
	    	let calcBaseDamage;
	    	if (enemy.mana > 0) {
	    		calcBaseDamage = enemy.strength * enemy.mana / 1000;
	    	}else {
	    		calcBaseDamage = enemy.strength * enemy.agility / 1000;
	    	}
			let offsetDamage = Math.floor(Math.random() * Math.floor(10));
			let calcOutputDamage = calcBaseDamage + offsetDamage;
			// Number of hits
			let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
			let attackValue = [calcBaseDamage, numberOfHits];
			return attackValue;
	} // Get player/enemy health to change
		let getPlayerHealth = document.querySelector(".health-player");
		let getEnemyHealth = document.querySelector(".health-enemy");


	//Initiate attack!
	    if (getPlayerSpeed >= getEnemySpeed ) {
	    	let playerAttackValue = playerAttack();
	    	let totalDamage = playerAttackValue[0] * playerAttackValue[1];
	    	enemy.health = enemy.health - totalDamage;
	    	alert("You hit " + playerAttackValue[0] + " damage " + playerAttackValue[1] + " times. ");
	    	if (enemy.health <= 0) {
	    		alert("You are a BEAST! Refresh browser to play again");
	    		getPlayerHealth.innerHTML = 'Health: ' + player.health;
	    		getEnemyHealth.innerHTML = 'Health: 0 ';
	    	}
	    	else {

	    		getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
	            
	            //enemy attack
	            let enemyAttackValues = enemyAttack();
	            let totalDamage = enemyAttackValue[0] * playerAttackValue[1];
	    	player.health = player.health - totalDamage;
	    	    alert("Enemy hit " + enemyAttackValue[0] + " damage " + playerAttackValue[1] + " times. ");
	    	    if (player.health <= 0) {
	    		alert("You lose :( ! Refresh browser to play again");
	    		getPlayerHealth.innerHTML = 'Health: 0  ';
	    		getEnemyHealth.innerHTML = 'Health ' + enemy.health;;
	    	   }
	    	   else {
	    	   	getPlayerHealth.innerHTML = 'Health: ' + player.health;

    	   }

    		
    	}

    }

}


