(function () {	  	
	var config = {
   		apiKey: "AIzaSyC1fK5BUmDK66Im40vesmMHadcjLseFxvQ",
   		authDomain: "sih1-c04cf.firebaseapp.com",
		databaseURL: "https://sih1-c04cf.firebaseio.com",
		storageBucket: "sih1-c04cf.appspot.com",
	  	messagingSenderId: "657409475726"
	};
	firebase.initializeApp(config);

	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		uName = email.split('@');
		console.log(uName);
		firebase.database().ref('currentUser/').set({
		username: uName[0]
		});
		alert("You have logged in successfully!");
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));

	});

	btnSignUp.addEventListener('click',e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		alert("You have signed up successfully!");
		promise.catch(e => console.log(e.message));
	});

	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});	

	firebase.auth().onAuthStateChanged (firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
		}
	});
//	console.log(user);
}());
