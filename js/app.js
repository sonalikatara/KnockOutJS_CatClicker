var catViewModel = function(){
	      this.name = ko.observable("Pelope");
            this.imageSrc = ko.observable("img/cat1.jpg"); 
            this.clickCount = ko.observable(0);

// increment click count each time a cat image is clicked
            this.incrementCounter = function(){
                 this.clickCount(this.clickCount()+1);
            };
//compute the level of the cat -- if click count > 100 the cat changes from New Born to Infant 
            this.level = ko.computed(function(){
            		if (this.clickCount() > 100) {
            			return "Infant"; 
            		} else {
            			return "New Born";
            		};
            },this);
// implement array of nicknames for the cats -- a usecase for controlflow structures 
            this.nicknames = ko.observableArray([
                   "Kattie",
                   "Golden",
                   "Tammy"
                  ]);
};

ko.applyBindings(new catViewModel());