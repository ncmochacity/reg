
$(document).ready(function () {
	
	function changeColor() {
		return '#' + Math.random().toString(16).slice(2,8);
	};

	$(".click").on("click", function () {
		$('body').css('background', changeColor());
	});
	var message=["I hope you are feeling better tomorrow",
				 "Yay!I always know you are awesome!",
				 "Cool, tell me more about it!",
				 "ಠ__ಠ" ,
				 "What are you doing on Friday Night to feel better?",
				 "Seriously? Who did that?"]
	$("#question").focus();
	$("form").on("submit",function(event){
		event.preventDefault();
		var question=$("#question").val().trim();
		if(question==""){
			question="haven't answered";
		}
		question=changeFunc(question);
		$("#repeater").text(question + "?");
		$(".message").text(message[Math.floor(Math.random() * 5)]);
		$("#question").val("");
	});
	function changeFunc(phrase){
		var startWith=phrase.substr(0,2).toUpperCase();
		var startWithMy=phrase.substr(0,3).toUpperCase();
		var newPhrase;

		if(startWith =="I"){
			newPhrase=phrase.replace(/I/gi, "You");
		}
		else if (startWithMy =="MY "){
			newPhrase=phrase.replace(/My /gi, "Your ");
		}
		else{
			newPhrase="You " + phrase;
		}
		
		newPhrase = newPhrase.replace(/ I /gi, " you ");
		newPhrase = newPhrase.replace(/ my /gi, " your ");
		newPhrase = newPhrase.replace(/ me /gi, " you ");
		return newPhrase;
	}	
});
	
