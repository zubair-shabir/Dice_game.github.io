var x,y, score ,activeplayer , roundscore ,save,Winningscore;



 	init();
 	document.querySelector('.btn-rule').addEventListener('click', function(){
 		document.querySelector('.rules-book').style.display = 'inline-block';
 		document.querySelector('.i--js').addEventListener('click', function(){
 		document.querySelector('.rules-book').style.display = 'none';
 	});
 	});
 	

	document.querySelector('.btn-roll').addEventListener('click', function(){
		var dice =  Math.floor(Math.random() * 6 )  + 1;
		document.querySelector('.dice').src = 'JS/Images/dice-' + dice + '.png' ;

		if(save === 6 && dice === 6){
				document.querySelector('.total-score-' + activeplayer).textContent= 0 ;
				score[activeplayer] = 0 ;
				nextplayer();
			}
			save = dice;
			console.log(dice);
		if(dice !== 1){
			
			
			roundscore +=  dice;
			document.querySelector('.current-' + activeplayer).textContent = roundscore;
			
		}
		else{
			nextplayer();
		}
		
	});


	document.querySelector('.btn-hold').addEventListener('click', function(){
		score[activeplayer] += roundscore;
		document.querySelector('.total-score-' + activeplayer).textContent= score[activeplayer];

		if(score[activeplayer] >= Winningscore){
			document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
			document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
			alert('Player  ' + (activeplayer + 1) + ' wins');
			document.querySelector('.btn-roll').style.display = 'none';
			document.querySelector('.btn-hold').style.display = 'none';
			document.querySelector('.dice').style.display = 'none' ;

			
		}else{

		nextplayer();
	}


	document.querySelector('.btn-new').addEventListener('click', init )
		
	});
	function nextplayer(){
		if(activeplayer === 0){
				activeplayer=1;
			}else(activeplayer=0)

			roundscore = 0 ;
			document.querySelector('.current-0').textContent = 0 ;
			document.querySelector('.current-1').textContent = 0 ;

			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
	};

	function init(){
		
	activeplayer=0;  
	roundscore=0;
    score = [0,0];

	document.querySelector('.current-0').textContent= 0;
	document.querySelector('.current-1').textContent= 0;
	document.querySelector('.total-score-0').textContent= 0;
	document.querySelector('.total-score-1').textContent= 0;
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');			
	document.querySelector('.btn-roll').style.display = 'inline-block';
	document.querySelector('.btn-hold').style.display = 'inline-block';
	document.querySelector('.dice').style.display = 'inline-block';
	//Winningscore = prompt('Enter Winning Points');
	Winningscore = 100;

	
   //x = prompt('Enter Player 1 Name');
   //y = prompt('Enter Player 2 Name');
	
	//document.querySelector('.player-0').textContent= x;
	//document.querySelector('.player-1').textContent= y;
};



