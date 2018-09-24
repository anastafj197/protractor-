// End to End test nodeAuth login program 
browser.ignoreSynchronization = true;

var username = "Snooper";
var password = 777;

describe("Testing nodeAuth site", function() {
	
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

	});
});
