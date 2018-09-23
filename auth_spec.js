// End to End test nodeAuth login program 
browser.ignoreSynchronization = true;

describe("Testing nodeAuth site", function() {
	
	// Travel to the host adress (localhost:3000)
	// must have server running to access page 
	it("Should travel to correct page", function() {
		browser.get("http://localhost:3000/users/register");
	}); 

	it("Should register a user", function() {
		element(by.css('[name="name"]')).sendKeys("Nikki");
		element(by.css('[name="email"]')).sendKeys("Nikki@gmail.com");
		element(by.css('[name="username"]')).sendKeys("Snooper");
		element(by.css('[name="password"]')).sendKeys("777");
		element(by.css('[name="password2"]')).sendKeys("777");
	});

	it("Should login with user", function() {

	});

	it("Should logout of user", function() {

	});
});
