// firebase object we use for storage:
var config = {
  apiKey: "AIzaSyC1fK5BUmDK66Im40vesmMHadcjLseFxvQ",
  authDomain: "sih1-c04cf.firebaseapp.com",
  databaseURL: "https://sih1-c04cf.firebaseio.com",
  storageBucket: "sih1-c04cf.appspot.com",
  messagingSenderId: "657409475726"
};
firebase.initializeApp(config);
var db = firebase.database();
var curUser = db.ref('currentUser');

curUser.on('value',gotData);
function gotData(data) {
    var current = data.val();
    var name = current.username;
    console.log(name);
    var User=firebase.database().ref('User').orderByKey().equalTo(name);
    User.on('value',gData);
    console.log(User);
    function gData(data)
    {
      var usr = data.val();
      var keys = Object.keys(usr);
      var k = keys[0];     
      var vals = usr[k].PNR;
      vals = vals + 1;
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', e => {
        const txtpnr = pnr.value;
        firebase.database().ref('User/' + name).set({
            PNR: vals
        });
});
}
}
