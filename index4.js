const quizQuestions = [
{
	question: "What is Nearly Headless Nick’s Full Name?",
	answers: [
		'Sir Nicholas de Monsky-Pimpton',
		'Sir Nicholas of Minsky-Popington',
		'Sir Nicholas de Mimsy-Porpington',
		'Sir Nicholas of Mimsy-Popington'
	], 
	correctAnswer: 2
}, 
//more items here
];

let questionNumber = 0;
let score = 0;
let currentQuestion = quizQuestions[0];

function startQuiz() {
	$("button[name='start']").on('click', function(event){
		$('#start-page').remove();
		$("#qa-form").css('display', 'block');
		renderQuestion();
		selectAnswer();
	});
};



///the following 2 functions display a question
function generateQuestion(){
	return `<div class ="question">
				<fieldset>
				<legend class ="question-text"> Question </legend>
				<form>
						<label id= "ans1" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span>  VAR  </span>
						</label>
						<label id= "ans2" class = "answer-choice" >
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span>  VAR  </span>
						</label>
						<label id= "ans3" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> VAR  </span>
						</label>
						</label>
						<label id= "ans4" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span>  VAR  </span>
						<button type="submit" class="submit-button"> submit</button>
					</fieldset>
				</form>
			</div>`;
		//} else {
			//displayResults();
			//restartQuiz();
			//do I need to display q number?
		//}
};

function renderQuestion(){
	$("#qa-form").html(generateQuestion());
};

//allow uers to select an answer
function selectAnswer(){
	$('form').submit(function (event) {
		event.preventDefault();
		let choice = 2;
		//let answer = selected.val();
		scoreAnswer(choice);
		nextQuestion();
	});
};

//add one to current question
function changeCurrentQuestion (){
	currentQuestion = quizQuestions[++i];
}

//next question - to be displayed on feedback
function nextQuestion() {
	//select it
	// $('main').on('click', '', function (event) {
    if (currentQuestion < quizQuestions.length) {
    	changeQuestionNumber();
	    changeCurrentQuestion();
	    renderQuestion();
	} else {
		displayResults();
	}
  //});
}

//score Answer 
function scoreAnswer (choice){
	if (choice = currentQuestion.correctAnswer) {
		correctAnswerFeedback();
		changeScore();
	} else {
		incorrectAnswerFeedback();
	}
}

//increment score
function changeScore () {
  score ++;
  $('.score').text(score+1);
}


//increment question number
function changeQuestionNumber () {
	questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}

//if correct answer
//function correctAnswer() {
	//correctAnswerFeedback();
	//changeScore();
//}

//feedback for correct answer
function correctAnswerFeedback() {
	$("#qa-form").html(`<div class="correct">
		<p><b>You got it right!</b></p><button type=button class="next-button">Next</button></div>
	</div>`)
}

//feedback for incorrect answer
function incorrectAnswerFeedback() {
	$("#qa-form").html(`<div class="correct"><p><b>You got it wrong!</b>
			<p>The correct answer is <span>"${correctAnswer}"</span></p><button type=button class="next-button">Next</button></div>`)
}

//render results 
function displayResults () {
	if (score >= 8) {
		$(".qa-form").html(`<div class="results"><h3>Yer a wizard, Harry!</h3><p>You got ${score} / 10</p><button class="restart-button">Restart Quiz</button></div>`)
	} else if (score < 8 && score >= 4) {
		$(".qa-form").html(`<div class="results"><h3>Muggleborn!</h3><p>You got ${score} / 10</p><button class="restart-button">Restart Quiz</button></div>`)
	} else {
		$(".qa-form").html(`<div class="results"><h3>You're a muggle!</h3><p>You got ${score} / 10</p><button class="restart-button">Restart Quiz</button></div>`)
	};
}

//restart quiz
function restartQuiz() {
	$('main').on('click', '.restart-button', function (event){
    location.reload();
  });
}



//start the quiz
function createQuiz() {
	startQuiz(); 
	selectAnswer();
	nextQuestion();

};

$(createQuiz);


