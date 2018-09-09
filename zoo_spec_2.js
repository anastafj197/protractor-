// Frank Anastasia
// Test using protractor that navigates to site 
// Enters text pressed contiune button and selscts from dropdown menu

describe ("Adopt animal on test site", function() {
	it ("should be able to adopt an animal", function() {
		browser.get("http://www.thetestroom.com/jswebapp");
		// (element) used to locate an element pass in type and value
		// (by) allows us to find something by a locator 
		// (model) takes in the value of the model link
		element(by.model("person.name")).sendKeys("Nikki has anxiety");
		// ng-bind
		element(by.binding("person.name")).getText().then(function(text) {
			console.log();
			console.log(text);
		});
		// locator used to click on buttons by the text witheld
		element(by.buttonText("CONTINUE")).click();
		// chain on css locator invoke with .$ css expressions inside
		element(by.model("animal")).$('[value="1"]').click();
		// Protracotr supports partial text inside button
		element(by.partialButtonText("CONTI")).click();

	});

});
