var displayArea = $("#display_area");
var inputArea = $("#input_area");
var text = "A bear came across a log where a swarm of bees had nested to make their honey. As he snooped around, a single little bee flew out of the log to protect the swarm. Knowing that the bear would eat all the honey, the little bee stung him sharply on the nose and flew back into the log.";
var rawWordArr = text.split(" ");
var wordArr = new Array();
var wordCount = 0;

for(var i = 0 ; i < rawWordArr.length ; i++) {
	wordArr.push("<span class='"+i+"'>"+rawWordArr[i]+"</span>&nbsp;");
}

//console.log(wordArr)

$(document).ready(function(){
	displayArea.html(wordArr);
	displayArea.children("."+wordCount).addClass("w3-gray");
});

function start(evt) {
	keyCode = evt.which;
	inputValue = inputArea.val().trim();

	if(keyCode == 32) {
		if(inputValue == rawWordArr[wordCount]) {
			displayArea.children("."+wordCount).removeClass("w3-gray").addClass("w3-text-green");
		}
		else {
			displayArea.children("."+wordCount).removeClass("w3-gray").addClass("w3-text-red");
		}
		inputArea.val("");
		wordCount++;
		displayArea.children("."+wordCount).addClass("w3-gray");
	}
}