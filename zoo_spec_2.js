// Frank Anastasia
// Test using protractor that navigates to site 
// Enters text pressed contiune button and selects from dropdown menu 
// Tests Added to validate different steps 

describe ("Adopt animal on test site", function() {

	afterEach(function() {
		console.log("After each method");
	})

	// takes us to the given url
	browser.get("http://www.thetestroom.com/jswebapp");

	it ("Should be on correct page", function() {
		// aserts we are on the correct url 
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	});

	describe ("Should generate correct text", function() {
		
		var textMessage;

		beforeEach(function() {
			textMessage = "Nikki has anxiety";
		});

		it ("Should check correct text", function(){
			// (element) used to locate an element pass in type and value
			// (by) allows us to find something by a locator 
			// (model) takes in the value of the model link
			element(by.model("person.name")).sendKeys(textMessage);
			// send the text in ng-bind to text variable 
			element(by.binding("person.name")).getText().then(function(text) {
				expect(text).toEqual("Nikki has anxiety");
			});
		});	
	});

	it ("Should press continue" ,function() {
		// locator used to click on buttons by the text witheld
		element(by.buttonText("CONTINUE")).click();
		// chain on css locator invoke with .$ css expressions inside
		element(by.model("animal")).$('[value="1"]').click();
	});

	it("Should check the correct number of drop down menu items", function() {
		// .all returns us an array
		// looks for any child node that belongs to the parent node
		//                             <--
		element.all(by.css(".ng-pristine option")).then(function(items) {
			expect(items.length).toBe(4);
			expect(items[1].getText()).toBe("George the Turtle");
		});	
	});

	it("Should check user is on thank you page", function() {

		// Protracotr supports partial text inside button
		element(by.partialButtonText("CONTI")).click();
		expect(browser.getCurrentUrl()).toContain("confirm");
	});
});
