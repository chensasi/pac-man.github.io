
	pacman = {//מיקום הפקמן
		x: 8,
		y: 6
	}

	world = [ 
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 
		[3,2,2,2,2,2,3,2,2,6,2,2,5,2,6,3], 
		[3,6,3,3,3,2,3,2,3,3,3,2,2,2,2,3], 
		[3,2,3,2,2,2,2,2,2,2,3,2,2,2,2,3], 
		[3,2,2,2,2,3,5,3,3,2,2,2,6,3,3,3], 
		[3,2,2,3,2,2,2,2,2,2,3,2,2,2,2,3], 
		[3,2,3,3,3,2,3,2,4,3,3,3,2,2,2,3], 
		[3,5,2,2,2,2,3,2,2,2,2,2,2,3,2,3], 
        [3,2,3,3,2,2,3,2,2,3,3,2,2,3,3,3],
        [3,2,3,3,2,2,3,2,2,3,3,2,2,3,2,3],
        [3,2,3,3,6,2,3,2,2,3,3,6,2,2,2,3],
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
	]

	var pac = document.getElementById('world');
	
	function drawWorld(){
		pac.innerHTML = '';
		for(var y = 0; y < world.length ; y = y + 1) {
			for(var x = 0; x < world[y].length ; x = x + 1) {		
				if (world[y][x] === 1) {
					pac.innerHTML += "<div class='black'></div>";
				}
				else if (world[y][x] === 2) {
					pac.innerHTML += "<div class='coin'></div>";
				}
				else if (world[y][x] === 3) {
					pac.innerHTML += "<div class='frame'></div>";
				}
				else if (world[y][x] === 4) {
					pac.innerHTML += "<div class='pacman'></div>";
				}
				else if (world[y][x] === 5) {
					pac.innerHTML += "<div class='ghost'></div>";
				}
                else if (world[y][x] === 6) {
					pac.innerHTML += "<div class='candy'></div>";
				}

                else if (world[y][x] === 7) {
					pac.innerHTML += "<div class='smiley'></div>";
				}
                else if (world[y][x] === 8) {
					pac.innerHTML += "<div class='sad'></div>";
				}

			}
			pac.innerHTML += "<br>";
		}
	}

	drawWorld();

	document.onkeydown = function(event){
		// console.log(event);
		if (event.keyCode === 37){ // PACMAN MOVE LEFT
			if ( world[pacman.y][pacman.x-1] !== 3){
				world[pacman.y][pacman.x] = 1;
				pacman.x = pacman.x - 1;
				world[pacman.y][pacman.x] = 4;
				drawWorld();
			}
		}
		else if (event.keyCode === 38){ // PACMAN MOVE UP
			if ( world[pacman.y-1][pacman.x] !== 3){
				world[pacman.y][pacman.x] = 1;
				pacman.y = pacman.y - 1;
				world[pacman.y][pacman.x] = 4;
				drawWorld();
			}
		}
		else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
			if ( world[pacman.y][pacman.x+1] !== 3){
				world[pacman.y][pacman.x] = 1;
				pacman.x = pacman.x + 1;
				world[pacman.y][pacman.x] = 4;
				drawWorld();
			}
		
        }
        else if (event.keyCode === 40){// PACMAN MOVE DOWN
			if ( world[pacman.y+1][pacman.x] !== 3){
				world[pacman.y][pacman.x] = 1;
				pacman.y = pacman.y + 1;
				world[pacman.y][pacman.x] = 4;
				drawWorld();
			}
        }
       // smiley
       // למטה 
       if ( world[pacman.y+1][pacman.x] == 6){
				world[pacman.y][pacman.x] = 1;
                pacman.y = pacman.y + 1;
				world[pacman.y][pacman.x] = 7;
				drawWorld();
			}
        
        //ימינה
        if ( world[pacman.y][pacman.x+1] == 6){
				world[pacman.y][pacman.x] = 1;
				pacman.x = pacman.x + 1;
				world[pacman.y][pacman.x] = 7;
				drawWorld();
			}
        //למעלה
         if (world[pacman.y-1][pacman.x] == 6){
				world[pacman.y][pacman.x] = 1;
				pacman.y = pacman.y - 1;
				world[pacman.y][pacman.x] = 7;
				drawWorld();
            }  
        //שמאלה
        if( world[pacman.y][pacman.x-1] == 6){
				world[pacman.y][pacman.x] = 1;
				pacman.x = pacman.x - 1;
				world[pacman.y][pacman.x] = 7;
				drawWorld();
            }
        
//שמאלה
           if ( world[pacman.y][pacman.x-1] == 5){
				world[pacman.y][pacman.x] = 1;
				pacman.x = pacman.x - 1;
				world[pacman.y][pacman.x] = 8;
				drawWorld();
            }
            //למעלה
            if ( world[pacman.y-1][pacman.x] == 5){
				world[pacman.y][pacman.x] = 1;
				pacman.x = pacman.y - 1;
				world[pacman.y][pacman.x] = 8;
				drawWorld();
            }
            //ימינה
            if ( world[pacman.y][pacman.x+1] == 5){
				world[pacman.y][pacman.x] = 1;
				pacman.x = pacman.x + 1;
				world[pacman.y][pacman.x] = 8;
				drawWorld();
			}
//למטה
            if ( world[pacman.y+1][pacman.x] == 5){
				world[pacman.y][pacman.x] = 1;
				pacman.y = pacman.y + 1;
				world[pacman.y][pacman.x] = 8;
				drawWorld();
			}
        
		console.log(world)
        
    }
    function timer() {
        alert("נגמר הזמן");
      }  
