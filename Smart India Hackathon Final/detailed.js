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
		var flyRef = database.ref('Flights').orderByKey().equalTo(param[1]);
		flyRef.on('value', gotData, errData);
		//console.log(flyRef.Airlines);
		function gotData(data){
			//console.log(data.val());
			var Flights = data.val();
			var keys = Object.keys(Flights);
			//console.log(keys);
			for(var i = 0; i < keys.length; i++) {
				var k = keys[i];
				var imgurl=Flights[k].Logo;
				var Airlines = Flights[k].Airlines;
				var Type = Flights[k].Type;
				var Status=Flights[k].Status;
				var webCheck = Flights[k].Web;
				var gateRef = database.ref('Location').orderByKey().equalTo(Flights[k].Gate);
				gateRef.on('value', gData, eData);
				function gData(data1){
					var Gates = data1.val();
					var kies = Object.keys(Gates);
					for(var j = 0; j < kies.length; j++) {
						var l = kies[j];
						var lat = Gates[l].Latitude;
						var lon = Gates[l].Longitude;
						//console.log(lat);
						var mapUrl = "https://www.google.com/maps/dir/Current+Location/"+lat+","+lon;
						document
							.getElementById("but")
							.innerHTML += '<a href="'+mapUrl+'" class="button" style="text-align:center;">SHOW IN MAP</a>';					
						document
							.getElementById("but2")
							.innerHTML += '<a href="'+webCheck+'" class="button" style="text-align:center;">WEB CHECK-IN</a>';
					}
				}
				function eData(er){
					console.log("Error!");
					console.log(er);
				}
				console.log(Airlines, Type, Status);
				document
					.getElementById("logo")
					.innerHTML+='<img class="icon" style="margin:0px; text-align:center; position:relative; top:20px; right:5px; border:dotted; border-color:#01ffff;" src="'+imgurl+'" width="200" height="200">';			
				document
					.getElementById("airName")
					.innerHTML+=Flights[k].Airlines;
				document
					.getElementById("source")
					.innerHTML+=Flights[k].Source;
				document
					.getElementById("destination")
					.innerHTML+=Flights[k].Destination;
				document
					.getElementById("dest")
					.innerHTML+=Flights[k].Dest;
				document
					.getElementById("srce")
					.innerHTML+=Flights[k].Srce;
				document
					.getElementById("flName")
					.innerHTML+=param[1];
				document
					.getElementById("gateNo")
					.innerHTML+=Flights[k].Gate;
				document
					.getElementById("depTime")
					.innerHTML+=Flights[k].ETD;
				document
					.getElementById("arrTime")
					.innerHTML+=Flights[k].ETA;	
			}
		}
			function errData(err){
			console.log("Error!");
			console.log(err);
		}
