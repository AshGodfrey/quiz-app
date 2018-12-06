let questionNumber = 1;
let score = 0;



//Establish questions + answers
const quizQuestions = [
{
	question: "What is Nearly Headless Nick’s Full Name?",
	answers: {
		'Sir Nicholas de Monsky-Pimpton',
		'Sir Nicholas of Minsky-Popington',
		'Sir Nicholas de Mimsy-Porpington',
		'Sir Nicholas of Mimsy-Popington'
	}, 
	correctAnswer: 'Sir Nicholas de Mimsy-Porpington'
}
];


	

//generate Question w/ HTML
function generateQuestion(){
	if (questionNumber < quizQuestions.length) {
		return `<div class ="question">
				<fieldset>
				<legend class ="question-text"> ${quizQuestions.question} </legend>
				<form>
						<label class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${quizQuestions.answers[0]} </span>
						</label>
						<label class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${quizQuestions.answers[1]} </span>
						</label>
						<label class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span>${quizQuestions.answers[2]} </span>
						</label>
						</label>
						<label class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${quizQuestion.answers[3]} </span>
						<button type="submit" class="submit-button"> submit</button>
					</fieldset>
				</form>
			</div>`
	} else {
		//render results
		//restart quiz
	}

}

//add one to question number
function changeQuestionNumber(){
	questionNumber += 1;
	return questionNumber;

}


//add one to score
function changeScore () {
	score += 1;
	return score;
}

//update score
//function updateScore(){
	//this would change how the score displays in DOM
//}


//start quiz
function startQuiz(){
	//click start botton
    //displays the quiz
};

//render question 
function displayQuestion(){
	//display rendered question
	//why cant I just display directly
}

//choose answer

function chooseAnswer(){
	//select an LI

}

//correct answer feedback
function correctAnswer(){
	//return 'correct'
	//display correct 

}

//incorrect answer feedback
function incorrectAnswer(){
	//return incorrect

}


//Quiz finished
function results(){
	//display final score

}

//next
function nextQuestion(){

}

//start the quiz 
function restartQuiz(){
	//this will be a button to start the quiz at question 1/start page 

}


//run quiz
function runQuiz(){

}