// Frank Anastasia 
// First time using protracotr / selinium webdriver for testing Angular js 

describe ("Test zoo site for input field on home page", function() {
	it ("To test input field and check test output", function() {
		browser.get("http://www.thetestroom.com/jswebapp");
		element(by.model("person.name")).sendKeys("I will sub");
		element(by.binding("person.name")).getText().then(function(text) {
			console.log(text);
		});
	});
});
