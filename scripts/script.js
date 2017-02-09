var displayArea = $("#display_area");
var inputArea = $("#input_area");
var timerArea = $("#timer_area");
var text = "A bear came across a log where a swarm of bees had nested to make their honey. As he snooped around, a single little bee flew out of the log to protect the swarm. Knowing that the bear would eat all the honey, the little bee stung him sharply on the nose and flew back into the log.";
var rawWordArr = text.split(" ");
var wordArr = new Array();
var time = 60;
var once = false;
var wordCount = 0;

for(var i = 0 ; i < rawWordArr.length ; i++) {
	wordArr.push("<span class='"+i+"'>"+rawWordArr[i]+"</span>&nbsp;");
}

//console.log(wordArr)

$(document).ready(function(){
	displayArea.html(wordArr);
	displayArea.children("."+wordCount).addClass("highlight");
	inputArea.focus();
	timerArea.html(time+" sec");
});

function start(evt) {
	if(!once) {
		timer();
		once = true;
	}
	keyCode = evt.which;
	inputValue = inputArea.val().trim();

	if(keyCode == 32) {
		if(inputValue == rawWordArr[wordCount]) {
			displayArea.children("."+wordCount).removeClass("highlight").addClass("correct");
		}
		else {
			displayArea.children("."+wordCount).removeClass("highlight").addClass("wrong");
		}
		inputArea.val("");
		wordCount++;
		displayArea.children("."+wordCount).addClass("highlight");
	}
}

function timer() {
	if(time > 0) {
		timerArea.html(time+" sec");
		time--;
		setTimeout(timer, 1000);
	}
	else {
		// displaying the result
	}
}

function restart() {
	location.reload();
}
