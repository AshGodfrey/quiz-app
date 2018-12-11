
//Establish questions + answers
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

let questionNumber = 1;
let score = 0;
let currentQuestion = quizQuestions[0];

//register event handlers
$("#start-button").on('click', startQuiz);
//function that corresponds to each id, everytime you click on a label
//add a class/styling to that label that will show that it is selected
//remove any prior selected
//set an answer variable, maybe there's a 'currentAnswer'
//click submit, if no answer do nothing. 
//if there is answer check to see if correct
//if correct add to score
//go to next question -- change to next question -- add to next question 

//generate Question w/ HTML
function generateQuestion(){
		return `<div class ="question">
				<fieldset>
				<legend class ="question-text"> ${currentQuestion.question} </legend>
				<form>
						<label id= "ans1" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${currentQuestion.answers[0]} </span>
						</label>
						<label id= "ans2" class = "answer-choice" >
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${currentQuestion.answers[1]} </span>
						</label>
						<label id= "ans3" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span>${currentQuestion.answers[2]} </span>
						</label>
						</label>
						<label id= "ans4" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${currentQuestion.answers[3]} </span>
						<button type="submit" id="submit-button"> submit</button>
					</fieldset>
				</form>
			</div>`;

};

//when user clicks submit
//1) Score question
//2) update score on screen
//3) update question number
//4) if more questions display next else display score/restart



function displayQuestion(){
	//display question to Dom
	$("#qa-form").html(generateQuestion());
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
	//hide the start info
	$("#start-page").hide();
    //displays the first question
    displayQuestion();
};



//choose answer

function chooseAnswer(){
	//select an LI

}




function handleSubmitButton() {
  $('#qa-form').on('click', '#submit-button', function(event) {
    event.preventDefault()

    //onst answer = $('input:checked').siblings('span');

    //const userIsCorrect = checkUserAnswer(answer);
    //if(userIsCorrect) {
     // generateCorrectFeedback();
    //} else {
     // generateIncorrectFeedback();
   // }
  //});
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

