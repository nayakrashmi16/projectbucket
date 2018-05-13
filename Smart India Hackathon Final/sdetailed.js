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
var sref = db.ref("Shop").orderByKey().equalTo(param[1]);
sref.on('value',gotData,errData);
function gotData(data) {
	var shop = data.val();
	var keys = Object.keys(shop);
	var k = keys[0];
	var imgurl=shop[k].Logo;
var shopRef = db.ref('Location').orderByKey().equalTo(k);
				shopRef.on('value', gData);
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
							.getElementById("sbut")
							.innerHTML = '<a href="'+mapUrl+'" class="button" style="text-align:center;">SHOW IN MAP</a>';
						}
document
	.getElementById("name")
	.innerHTML=k;
document
	.getElementById("but")
	.innerHTML=shop[k].Coupon;
document
	.getElementById("but1")
	.innerHTML=shop[k].Offers;
document
	.getElementById("details")
	.innerHTML=shop[k].Description;
document.getElementById("logo")
						.innerHTML='<img class="icon" style="margin:0px; text-align:center; position:relative; top:20px; right:5px; border:dotted; border-color:#01ffff;" src="'+imgurl+'" width="200" height="200">'}
}
		function errData(err){
			console.log("Error!");
			console.log(err);
		}
