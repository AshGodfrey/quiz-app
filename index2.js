//1. User clicks "start quiz"
//2. Display question 1
//3. User selects an answer
//4. Quiz checks to see if answer is correct
//5. Quiz displays answer
//6. Add one to the score (if correct)
//7. Add one to the question total 
//8. After question 10 user is brought to final question,
//and allowed to restart




//variables
let score = 0;
let questionNumber = 0;

$("button[name='start']").click(function(){
	alert("ready!");
});


//start quiz function
function startQuiz() {
	$('#start-page').on('click', '#start-button', function(event) {
		alert ('test');
		$('#start-page').remove();
		$("#qa-form").css('display', 'block');
		//adds 1 to question number - optional
		$('.question-number').text(1);
	});
}


//Generate quiz question
function generateQuestion(){
		return `<div class ="question">
				<fieldset>
				<legend class ="question-text"> ${var} </legend>
				<form>
						<label id= "ans1" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${var} </span>
						</label>
						<label id= "ans2" class = "answer-choice" >
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${var} </span>
						</label>
						<label id= "ans3" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span>${var} </span>
						</label>
						</label>
						<label id= "ans4" class = "answer-choice">
							<input type = "radio" value="choicetext" name = "answer" class="answer" required>
							<span> ${var} </span>
						<button type="submit" id="submit-button"> submit</button>
					</fieldset>
				</form>
			</div>`;

};

//display quiz question to DOM
function displayQuestion() {
	$("#qa-form").html(generateQuestion());
}

//user selects an answer: 
function chooseAnswer(){
	$('form').on('submit', function (event)) {
		event.preventDefault();
		let choice = $('input:checked');
		let answer = selected.val();
		let correctAnswer = //variable that displays correct
		if answer === correctAnswer {
			//selected.parent().addClass('correct');
			//correctAnswer();
		} else {
			//selected.parent().addClass('wrong');
			//incorrectAnswer();
		}
	}
};

//generate correct answer message/feedback
function displayCorrectAnswer() {
	$("#qa-form").html(
		//do the CSS HERE
		);
}


//generate incorrect answer message/feedback
function displayIncorrectAnswer() {
	$("#qa-form").html(
		//do the CSS HERE
		);

};

//if answer is correct
function answerIsCorrect() {
	displayCorrectAnswer();
	updateScore();
	//add one to question number
};

//if answer is incorrect
function answerIsWrong() {
	displayIncorrectAnswer();
	//should this even be a function if all it does 
	//is call another one?
};




//display feedback


//add 1 to score
function changeScore () {
  score ++;
};


//update score
function updateScore() {
	changeScore();
	$('.score').text(score);

};

function renderResults() {
	//follow model for rendering questions, 
	//might consider doing if (score >= 8)
	//else if score < 8 && score >= 5
	//else
};

//move to next question from feedback page
function nextQuestion () {
	//MAIN MIGHT NOT BE RIGHT NEED TO DEFINE NEXT BUTTON
	$('main').on('cick', '.next-button', function (event) {
		//changequestionnumber()
		displayquestion();
		chooseAnswer();
	}
};

//restart quiz - aka reload page to start
function restartQuiz() {
	$('main').on('click', '.restart-button', function(event){
		location.reload();
	});
}

//run quiz functions
function runQuiz() {
	startQuiz();
	//renderquestion()
	chooseAnswer();
	nextQuestion();
}





