// Frank Anastasia 
// End to End / unit tests nodeAuth login program 

// Non angular app requires ignore statement 
browser.ignoreSynchronization = true;

var username = "Snoopers";
var password = 7773;

var r = "random";

describe("Testing nodeAuth local site", function() {
	
	// Travel to the host adress (localhost:3000)
	// must have server running to access page 
	it("Should travel to correct page", function() {
		browser.get("http://localhost:3000/users/register");
	}); 

	it("Should register a user", function() {
		// Enter data 
		element(by.css('[name="name"]')).sendKeys("Nikki");
		element(by.css('[name="email"]')).sendKeys("Nikki@gmail.com");
		element(by.css('[name="username"]')).sendKeys(username);
		element(by.css('[name="password"]')).sendKeys(password);
		element(by.css('[name="password2"]')).sendKeys(password);

		// Submit with register button 
		element(by.css('[type="submit"]')).click()
	});

	it("Should login with chosen username & password", function() {
		// Enter username / password to login
		element(by.css('[name="username"]')).sendKeys(username);
		element(by.css('[name="password"]')).sendKeys(password);
		// Login with login button 
		element(by.css('[type="submit"]')).click()

	});

	it("Should logout of user", function() {
		// grab any href link ending in logout
		element(by.css('a[href$="logout"]')).click()
	});

	it("Shouldn't be able login with an invalid user", function() {
		// Enter random username / password submit -> expect fail
		element(by.css('[name="username"]')).sendKeys(r);
		element(by.css('[name="password"]')).sendKeys(r);
		element(by.css('[type="submit"]')).click()

		// expects the correct text in error message 
		error = element(by.css('[class="error"]')).getText();
		expect(error).toBe("Invalid username / password");
	});
});
