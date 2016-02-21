
var WordProblem = function(question){
	this.answer = function(){
		var questionArray = 
			question.match(/(\d+|plus|minus|multiplied\sby|divided\sby|cubed)/ig);
		// return questionArray;
		var numberfied = 
			questionArray.map(function(element){
					if(Number(element)){
						return Number(element);
					} else {
						return element;
					}
			});
		return numberfied;
	};

};

var ArgumentError = function(){};


module.exports = {
	WordProblem: WordProblem,
	ArgumentError: ArgumentError
};