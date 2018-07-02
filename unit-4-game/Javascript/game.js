    
    $(document).ready(function () {

        var randNum = Math.floor(Math.random() * 100) + 20;
        $("#score").html(randNum);


        // create a countNum formula between 1-12

        var num1 = Math.floor(Math.random() * 12 + 1)
        var num2 = Math.floor(Math.random() * 12 + 1)
        var num3 = Math.floor(Math.random() * 12 + 1)
        var num4 = Math.floor(Math.random() * 12 + 1)


        var playerTotal = 0;
        var wins = 0;
        var losses = 0;

        function reset() {
            randNum = Math.floor(Math.random() * 100) + 19;
            console.log(randNum);
            $('#score').text(randNum);
            num1 = Math.floor(Math.random() * 12 + 1);
            num2 = Math.floor(Math.random() * 12 + 1);
            num3 = Math.floor(Math.random() * 12 + 1);
            num4 = Math.floor(Math.random() * 12 + 1);
            playerTotal = 0;
            $('#player-score').html(playerTotal);
        }

        function woohoo() {
            alert("Congrats! You won!");
            wins++;
            $('#wins').html(wins);
            reset();
        }
        // Display losses
        function loser() {
            alert("Sorry! You lose!");
            losses++;
            $('#losses').html(losses);
            reset()
        }

        $("#square").on("click", function () {
            playerTotal = playerTotal + num1;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }

        })

        $("#circle").on("click", function () {
            playerTotal = playerTotal + num2;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }
           
        })
        $("#diamond").on("click", function () {
            playerTotal = playerTotal + num3;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }
        })
        $("#triangle").on("click", function () {
            playerTotal = playerTotal + num4;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }

        })

    });