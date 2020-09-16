let GameManager = {
	setGameStart: function(classType){
		this.resetPlayer(classType);
		this.setPreFight();


	},
	resetPlayer: function(classType){
		switch(classType){
			case "Warrior":
			  player = new Player(classType, 200, 0, 200, 100, 50);
			  break;
			case "Warwick":
			  player = new Player(classType, 100, 0, 100, 150, 200);
			  break;
			case "Karma":
			  player = new Player(classType, 80, 0, 50, 200, 100);
			  break;
			case "Vayne":
			  player = new Player(classType, 200, 0, 50, 200, 100);
			  break;
		}
		let getInterface = document.querySelector(".interface");
		getInterface.innerHTML = '<img src="game/warrior/'+
		classType.toLowerCase() +'.png" class="game/warrior/"><div><h3>'+ classType +'</h3><p class="health-player">Health: '+ player.health +
		'</p><p>Mana: '+ player.mana +'</p><p>Strength: '+ player.strength 
		+'</p><p>Speed: '+ player.speed +'</p></div>';

	},
	setPreFight: function(){
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getArena  = document.querySelector(".arena");
		getHeader.innerHTML= '<p>Task: Find an enemy!</p>';
		getActions.innerHTML= '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy</a>';
        getAreana.style.visibility = "visible";


	},
	setFight: function(){
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getEnemy  = document.querySelector(".enemy");
		// Create enemy!
		let enemy00 = new Enemy("Chogath", 100, 0, 50, 100);
		let enemy01 = new Enemy("Kog Mow", 200, 0, 150, 80);
		let chooseRandomEnemy = Math.floor(Math.random() *  Math.floor(2));
		
		switch(chooseRandomEnemy){
			case 0:
			  enemy = enemy00;
			  break;
			case 1: 
			  enemy = enemy01;
			  break;

		}
		getHeader.innerHTML = '<p>Taks: Choose your move</p>';
		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="">Attack!</a>';
		getEnemy.innerHTML = '<img src="game/enemy/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType 
		+ '"class="img-avatar"><div><h3>' + enemy.health +'<p class="health-enemy">Health: '
		+ enemy.strength + '</p><p>Agility: '+ enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';

         


	}
}