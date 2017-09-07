
	var paire=0;
	var html = "";
	var cardId1 =0;
	var cardId2 = 0;

	//construction des cartes et du paquet de cartes
	function card(id, img){
		this.id = id;
		this.img = "assets/img/"+img;
	}

	var carte1 = new card(1, "finn.png");
	var carte2 = new card(2, "jake.png");
	var carte3 = new card(3, "marceline.jpg");
	var carte4 = new card(4, "bmo.png");
	var carte5 = new card(5, "princChewing.jpg");
	var carte6 = new card(6, "roiGlace.png");
	var cardTab =[carte1, carte1, carte2, carte2, carte3, carte3, carte4, carte4, carte5, carte5, carte6, carte6];

	//fonction de mélange du paquet
	function shuffle(array) {

	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];

	        array[i] = array[j];
	        array[j] = temp;
	    }

	    return array;
	}
	
	//mélange du paquet
	cardTab = shuffle(cardTab);	

	//affichage des cartes dans le html
	var i = 0;

	while(i < cardTab.length){
		html += "<div class='card' id="+i+" data-card="+cardTab[i].id+" onclick = 'memory("+ i +", "+cardTab[i].id+", \""+cardTab[i].img+"\")'><img class=\"card-img\" src=\"assets/img/back.jpg\"></div>"
		i++;
	}

	//fonction de comparaison du mémory
	function memory(id, cardId, img){

		if(paire == 0){
			document.getElementById(id).innerHTML = "<img class=\"card-img\" src="+img+">";
			id1 = id;
			cardId1 =cardId;
			paire ++;

			return
		}

		else if(paire == 1)
			document.getElementById(id).innerHTML = "<img class=\"card-img\" src="+img+">";
			id2 = id;
			cardId2 =cardId;

			if(cardId1 == cardId2 && id1 != id2){
				document.getElementById(id1).style.borderColor = "green";
				document.getElementById(id2).style.borderColor = "green";
				document.getElementById(id1).setAttribute.onclick = "false";
				document.getElementById(id2).onclick = "false";
				paire = 0;
			}
			else{
				document.getElementById(id1).style.borderColor = "red";
				document.getElementById(id2).style.borderColor = "red";
				setTimeout(function(){
					document.getElementById(id1).style.borderColor = "black";
					document.getElementById(id2).style.borderColor = "black";
					document.getElementById(id1).innerHTML = "<img class=\"card-img\" src=\"assets/img/back.jpg\"></div>";
					document.getElementById(id2).innerHTML = "<img class=\"card-img\" src=\"assets/img/back.jpg\"></div>";
					paire = 0;
				},1500);
			}
	}

	console.log(html);
	document.getElementById("memory").innerHTML = html;

