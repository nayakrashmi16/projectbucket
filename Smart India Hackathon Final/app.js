		// Initialize Firebase
	  	var config = {
   		apiKey: "AIzaSyC1fK5BUmDK66Im40vesmMHadcjLseFxvQ",
   		authDomain: "sih1-c04cf.firebaseapp.com",
   		databaseURL: "https://sih1-c04cf.firebaseio.com",
   		storageBucket: "sih1-c04cf.appspot.com",
	  	messagingSenderId: "657409475726"
		};
		firebase.initializeApp(config);

		var database = firebase.database();
		var FullURL = window.location.href;
		var param = FullURL.split('=');
		if (param[1] == 'Arrival')
			var flyRef = database.ref('Flights').orderByChild('Type').equalTo('Arrival');
		if (param[1] == 'Departure')
			var flyRef = database.ref('Flights').orderByChild('Type').equalTo('Departure');
		flyRef.on('value', gotData, errData);

		function gotData(data){
			console.log(flyRef);
			console.log(data);
			console.log(data.val());
			var Flights = data.val();
			var keys = Object.keys(Flights);
			//console.log(keys);
			for(var i = 0; i < keys.length; i++) {
				var k = keys[i];
				var Airlines = Flights[k].Airlines;
				var Type = Flights[k].Type;
				var Status=Flights[k].Status;
				console.log(Airlines, Type, Status);
				var url="flightindie.html?v="+k;
				var imgUrl = Flights[k].Logo;
				document
					.querySelector("#flightlist")
					
					.innerHTML+='<li class="list-group-item Flights[k]" style="border-style:solid; text-align:center; border-color:Teal; text-decoration:none;border-width:10px; font-size:30px; margin:20px;  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); position:relative; width:500;  "><div><img style="text-align:riht;" src="'+imgUrl+'" width="150" height="150"><p style="pos "><p class="lead">'+Flights[k].Airlines+'</p><p>'+Flights[k].Type+'</p><p>'+Flights[k].Status+'<br><a href="'+url+'">See more</a></p></div></li>';

			}
		}

		function errData(err){
			console.log("Error!");
			console.log(err);
		}
