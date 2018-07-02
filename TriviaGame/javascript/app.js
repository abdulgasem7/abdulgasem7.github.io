// Global Values
// alert("hello");
var n =45;

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var userAnswerSelector1;
var userAnswerSelector2;
var userAnswerSelector3;
var userAnswerSelector4;
var userAnswerSelector5;
var userAnswerSelector6;
var userAnswerSelector7;
var userAnswerSelector8;
var userAnswerSelector9;
var userAnswerSelector10;
var pickAnswers = ["correct", "incorrect"];
var userAnswers = [];

$(document).ready(function () {

    // start the game by clicking the button and alerting the timer to start
    startGameTimer();

    function startGameTimer() {
        $(".startBtn").on('click', function (startTimerGoing) {
            // make screen disappear
            $(".starterScreen").css({
                'display': 'none'
            });
            $(".questionScreen").css({
                'display': 'block'
            });
            $(".timer-display").css({
                'display': 'block'
            });

            // start Game Function
            countdown();
        });
    }

    function countdown() {
        n--;
        if (n > 0) {
            setTimeout(countdown, 1000);
            $(".timer-display").html("Time Left: " + n + " Seconds!");
        } else {
            arrayAnswers();
            compareArray();
            displayAnswers();

            $(".timer-display").html("Time Is Up!");
            $(".questionScreen").css({
                'display': 'none'
            });

        }
    }

    $('.radio-inline1').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector1 = $('input[name="optradio1"]:checked').val();
    });
    $('.radio-inline2').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector2 = $('input[name="optradio2"]:checked').val();
    });
    $('.radio-inline3').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector3 = $('input[name="optradio3"]:checked').val();
    });
    $('.radio-inline4').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector4 = $('input[name="optradio4"]:checked').val();
    });
    $('.radio-inline5').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector5 = $('input[name="optradio5"]:checked').val();
    });
    $('.radio-inline6').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector6 = $('input[name="optradio6"]:checked').val();
    });
    $('.radio-inline7').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector7 = $('input[name="optradio7"]:checked').val();
    });
    $('.radio-inline8').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector8 = $('input[name="optradio8"]:checked').val();
    });
    $('.radio-inline9').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector9 = $('input[name="optradio9"]:checked').val();
    });
    $('.radio-inline10').on('click', function (storeTriviaBtnAnswer) {
        userAnswerSelector10 = $('input[name="optradio10"]:checked').val();
    });

    function arrayAnswers() {
        userAnswers.push(userAnswerSelector1)
        userAnswers.push(userAnswerSelector2)
        userAnswers.push(userAnswerSelector3)
        userAnswers.push(userAnswerSelector4)
        userAnswers.push(userAnswerSelector5)
        userAnswers.push(userAnswerSelector6)
        userAnswers.push(userAnswerSelector7)
        userAnswers.push(userAnswerSelector8)
        userAnswers.push(userAnswerSelector9)
        userAnswers.push(userAnswerSelector10)
        console.log(userAnswers);
    }

    function compareArray() {
        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === "correct") {
                correct++;
                console.log(correct)
            } else if (userAnswers[i] === undefined) {
                unanswered++;

            } else {
                incorrect++;
            }

        }

    }

    function displayAnswers() {
        $(".displayCorrect").html('Correct: ' + correct);
        $(".displayIncorrect").html('Incorrect: ' + incorrect);
        $(".displayUnanswered").html('Unanswered: ' + unanswered);
        $('.scoreBoard').css({
            'display': 'block'
        });
        $('.endScreen').css({
            'display': 'block'
        });
    }

    $('.restartBtn').on('click', function () {
        location.reload();

        // simple reload works
        
        // correct = 0;
        // incorrect = 0;
        // unanswered = 0;
        // n = 45;
        // userAnswerSelector1 = 0;
        // userAnswerSelector2 = 0;
        // userAnswerSelector3 = 0;
        // userAnswerSelector4 = 0;
        // userAnswerSelector5 = 0;
        // userAnswerSelector6 = 0;
        // userAnswerSelector7 = 0;
        // userAnswerSelector8 = 0;
        // userAnswerSelector9 = 0;
        // userAnswerSelector10 = 0;
        // $("scoreBoard").empty();
        // $('.radio-inline1').prop('checked', false);
        // $('.radio-inline2').prop('checked', false);
        // $('.radio-inline3').prop('checked', false);
        // $('.radio-inline4').prop('checked', false);
        // $('.radio-inline5').prop('checked', false);
        // $('.radio-inline6').prop('checked', false);
        // $('.radio-inline7').prop('checked', false);
        // $('.radio-inline8').prop('checked', false);
        // $('.radio-inline9').prop('checked', false);
        // $('.radio-inline10').prop('checked', false);

        // $(".starterScreen").css({
        //     'display': 'none'
        // });
        // $(".questionScreen").css({
        //     'display': 'block'
        // });
        // $(".timer-display").css({
        //     'display': 'block'
        // });
        // $('.endScreen').css({
        //     'display': 'none'
        // });false



    });false

});