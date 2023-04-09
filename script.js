function generatePassword() {
	// Get password length
	var passwordLength = document.getElementById("passwordLength").value;

	// Get checkbox values
	var uppercase = document.getElementById("uppercase").checked;
	var lowercase = document.getElementById("lowercase").checked;
	var numbers = document.getElementById("numbers").checked;
	var symbols = document.getElementById("symbols").checked;

	// Set characters based on checkbox values
	var characters = "";
	if (uppercase) {
		characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (lowercase) {
		characters += "abcdefghijklmnopqrstuvwxyz";
	}
	if (numbers) {
		characters += "0123456789";
	}
	if (symbols) {
		characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
	}

	// Generate password
	var password = "";
	for (var i = 0; i < passwordLength; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	// Display password
	document.getElementById("password").value = password;
}
