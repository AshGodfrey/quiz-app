const quizQuestions = [
{
	question: "What is Nearly Headless Nick’s Full Name?",
	answers: [
		'Sir Nicholas de Monsky-Pimpton',
		'Sir Nicholas of Minsky-Popington',
		'Sir Nicholas de Mimsy-Porpington',
		'Sir Nicholas of Mimsy-Popington'
	], 
	correctAnswer: 'Sir Nicholas de Mimsy-Porpington'
}, 
{ 
	question: "What is the max speed for a Firebolt Broomstick?",
	answers: [
		'100 MPH',
		'150 MPH',
		'175 MPH',
		'135 MPH'
	], 
	correctAnswer: '150 MPH'
},
{
	question: "What did Ginny name her pet pygmy puff?",
	answers: [
		'Arnold',
		'Floofy',
		'Scabbers II',
		'Arthur'
	], 
	correctAnswer: 'Arnold'
}, 
{
	question: "Which was NOT a password to the headmaster’s office",
	answers: [
		'Cockroach Cluster',
		'Raspberry Gumdrop',
		'Dumbledore',
		'Sherbert Lemon',
	], 
	correctAnswer: 'Raspberry Gumdrop'
}, 
{
	question: "What is Aragog’s wife’s name?",
	answers: [
		'Mosag',
		'Mora',
		'Argona',
		'Mosog'
	], 
	correctAnswer: 'Mosag'
}, 
{
	question: "What house was Moaning Myrtle sorted into?",
	answers: [
		'Slytherin',
		'Ravenclaw',
		'Gryffindor',
		'Hufflepuff'
	], 
	correctAnswer: 'Ravenclaw'
}, 
{
	question: "What year was Ollivanders Founded?",
	answers: [
		'465 BC',
		'57 BC',
		'712 BC',
		'382 BC'
	], 
	correctAnswer: '382 BC'
}, 
{
	question: "What number is Harry's vault at Gringotts?",
	answers: [
		'687',
		'787',
		'727',
		'627'
	], 
	correctAnswer: '687'
}, 
{
	question: "Who is in the compartment that Harry, Ginny, and Neville join at the beginning of Harry’s fifth year?",
	answers: [
		'Cho Chang',
		'Remus Lupin',
		'Luna Lovegood',
		'Hermione Granger'
	], 
	correctAnswer: 'Luna Lovegood'
}, 
{
	question: "Where did Qudditch Originate?",
	answers: [
		"Hogsmede",
		'Queerditch Marsh',
		'Quebec',
		'Edinborough'

	], 
	correctAnswer: 'Queerditch Marsh'
}, 
];

let score = 0;
let questionNumber = 1;
let currentQuestion = quizQuestions[0];

function generateQuestion () {
	return `<div class ="question">
				<fieldset>
				<legend class ="question-text"> ${currentQuestion.question}</legend>
				<form>
						
							<input type = "radio" value="${currentQuestion.answers[0]}" name= "answer" id= "answer1" required>
							<label for="answer1" id= "ans1" class="answer-choice">
							<span>  ${currentQuestion.answers[0]} </span> </label>
						
							<input type = "radio" value="${currentQuestion.answers[1]}" name= "answer"  id = "answer2" required>
							<label for="answer2" id= "ans2" class = "answer-choice" >
							<span> ${currentQuestion.answers[1]} </span>
						    </label>
						
							<input type = "radio" value="${currentQuestion.answers[2]}"  name= "answer"  id = "answer3" required>
							<label for="answer3" id= "ans3" class = "answer-choice">
							<span> ${currentQuestion.answers[2]}  </span>
							</label>

							<input type = "radio" value="${currentQuestion.answers[3]}" name= "answer"  id = "answer4"  required>
							<label for="answer4" id= "ans4" class = "answer-choice">
							<span> ${currentQuestion.answers[3]}</span>
							</label>

						<button type="submit" class="submit-button"> submit</button>
					</fieldset>
				</form>
			</div>`;
};

function startQuizButton () {
	$("button[name='start']").on('click', function(event){
		nextQuestion();
	});
};

function nextQuestion () {
	$('#start-page').remove();
	$('#qa-form').html(generateQuestion());
}

function submitAnswer() {
	$('#qa-form').on('click', '.submit-button', function (event) {
		event.preventDefault();
		let userChoice = $('input:radio[name=answer]:checked').val();
		checkAnswer(userChoice);
	});
};

function checkAnswer(choice) {
	if (choice == currentQuestion.correctAnswer) {
		correctAnswer();
	} else {
		incorrectAnswer();
	}
};

function correctAnswer() {
	correctAnswerFeedback()
	addToScore();
}

function incorrectAnswer() {
	incorrectAnswerFeedback();
}

function correctAnswerFeedback() {
	$("#qa-form").html(`<div class="correct">
		<p><b>You got it right!</b></p><button type=button class="next-button">Next</button></div>
	</div>`)


}

//feedback for incorrect answer
function incorrectAnswerFeedback() {
	$("#qa-form").html(`<div class="correct"><p><b>You got it wrong!</b>
			<p>The correct answer is <span>${currentQuestion.correctAnswer}</span></p><button type=button class="next-button">Next</button></div>`)
}

//add one to score
function addToScore () {
	score ++;
  $('.score').text(score);
};

function changeQuestionNumber() {
	currentQuestion = quizQuestions[questionNumber];
	questionNumber ++;
  $('.question-number').text(questionNumber);
};



//what happens when user clicks next
function nextButton() {
	 $('#qa-form').on('click', '.next-button', function (event) {
	  if (questionNumber === 10) {
	   	renderResults();
	  } else {
	 	nextQuestion();
	 	changeQuestionNumber();
	 	nextQuestion();
	  }
	});
};

function renderResults() {
	if (score >= 8) {
		$("#qa-form").html(`<div class="results"><h3>Yer a wizard, Harry!</h3><p>You got ${score} / 10</p><button id="restart-button">Restart Quiz</button></div>`)
	} else if (score < 8 && score >= 4) {
		$("#qa-form").html(`<div class="results"><h3>Muggleborn!</h3><p>You got ${score} / 10</p><button id="restart-button">Restart Quiz</button></div>`)
	} else {
		$("#qa-form").html(`<div class="results"><h3>You're a muggle!</h3><p>You got ${score} / 10</p><button id="restart-button">Restart Quiz</button></div>`)
	};
	$('#questions-left').hide();
	restartQuiz();
};


function restartQuiz() {
	$('.results').on('click', '#restart-button', function (event){
		location.reload();
	});
}; 

function selectAnswer() {
}''



function takeQuiz () {
	startQuizButton();
	submitAnswer();
	startQuizButton();
	nextButton();
	selectAnswer();
}


$(takeQuiz);

