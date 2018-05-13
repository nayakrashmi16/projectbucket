		// Initialize Firebase
var config = {
	apiKey: "AIzaSyC1fK5BUmDK66Im40vesmMHadcjLseFxvQ",
	authDomain: "sih1-c04cf.firebaseapp.com",
	databaseURL: "https://sih1-c04cf.firebaseio.com",
	storageBucket: "sih1-c04cf.appspot.com",
	messagingSenderId: "657409475726"
};
firebase.initializeApp(config);
var FullURL = window.location.href;
var param = FullURL.split('=');

var db = firebase.database();
var fref = db.ref("Restaurants").orderByKey().equalTo(param[1]);
fref.on('value',gotData,errData);
function gotData(data) {
	var food = data.val();
	console.log(food);
	var keys = Object.keys(food);
	var k = keys[0];
	console.log(k);
	var imgurl=food[k].Logo;
	var resRef = db.ref('Location').orderByKey().equalTo(k);
				resRef.on('value', gData);
				function gData(data1){
					var Loc = data1.val();
					var kies = Object.keys(Loc);
					for(var j = 0; j < kies.length; j++) {
						var l = kies[j];
						var lat = Loc[l].Latitude;
						var lon = Loc[l].Longitude;
						//console.log(lat);
						var mapUrl = "https://www.google.com/maps/dir/Current+Location/"+lat+","+lon;
						document
							.getElementById("mbut")
							.innerHTML = '<a href="'+mapUrl+'" class="button" style="text-align:center;">SHOW IN MAP</a>';
						}
document
	.getElementById("name")
	.innerHTML=k;
document
	.getElementById("but")
	.innerHTML=food[k].Coupon;
document
	.getElementById("but1")
	.innerHTML=food[k].Offers;
document
	.getElementById("details")
	.innerHTML=food[k].Description;
document.getElementById("logo")
						.innerHTML='<img class="icon" style="margin:0px; text-align:center; position:relative; top:20px; right:5px; border:dotted; border-color:#01ffff;" src="'+imgurl+'" width="200" height="200">'}
}
		function errData(err){
			console.log("Error!");
			console.log(err);
		}
