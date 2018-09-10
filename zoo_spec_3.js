// Frank Anastasia 
// Practice using protractor on QAShahin's javascript test site
// A deeper look at css identification 

describe("Testing js zoo site", function() {
	
	beforeEach(function() {
		browser.get("http://www.thetestroom.com/jswebapp");
	});
		
	it("Should test by using css expressions", function() {

		// css tag (by name of the tag)
		element(by.css('input')).sendKeys("Nikki and Polo <3");

		// css class (by class uses .nameofclass)
		element(by.css('.ng-binding')).getText().then(function(text) {
			console.log(text);
		});

		// css id (by id uses # followed by value of the id)
		element(by.css('#continue_button')).click();

		// css chaining (by tag and id)
		element(by.css('button#continue_button')).click();

		// css child nodes (represented by spaces table -> td -> a)
		// looks at all child nodes 
		element(by.css('table td a')).getText().then(function(text) {
			console.log(text);
		});

		// css attribute 
		// must use different set of marks 
		element(by.css('[id="title"]')).getText().then(function(text) {
			console.log(text);
		});

	});	

});
