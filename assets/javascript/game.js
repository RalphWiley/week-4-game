// selects random number between 19-120 to start the game //
$(document).ready(function() {
    var random = Math.floor(Math.random() * 101 + 19);


    $('#randomNumber').text(random);

    var number1 = Math.floor(Math.random() * 11 + 1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    var number3 = Math.floor(Math.random() * 11 + 1);
    var number4 = Math.floor(Math.random() * 11 + 1);

    var wins = 0;
    var losses = 0;
    var playerScore = 0;

    $('#winner').text(wins);
    $  ('#loser').text(losses);
    // resets the game //
    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $('#randomNumber').text(random);
        number1 = Math.floor(Math.random() * 11 + 1);
        number2 = Math.floor(Math.random() * 11 + 1);
        number3 = Math.floor(Math.random() * 11 + 1);
        number4 = Math.floor(Math.random() * 11 + 1);
        playerScore = 0;
        $('#total').text(playerScore);
    }
    // adds wins to playerScore //
    function won() {
        alert("YOU WON!");
        wins++;
        $('#winner').text(wins);
        reset();
    }
    // adds losses to playerScore //
    function lost() {
        alert("you lost.");
        losses++;
        $('#loser').text(losses);
        reset()
    }
    //clicks for crystals//
    $('#first').on('click', function() {
        playerScore = playerScore + number1;
        $('#total').text(playerScore);

        if (playerScore === random) {
            won();
        }
        else if (playerScore > random) {
            lost();
        }
    });
    $('#second').on('click', function() {
        playerScore = playerScore + number2;
        $('#total').text(playerScore);

        if (playerScore === random) {
            won();
        }
        else if (playerScore > random) {
            lost();
        }
    });
    $('#third').on('click', function() {
        playerScore = playerScore + number3;
        $('#total').text(playerScore);

        if (playerScore === random) {
            won();
        }
        else if (playerScore > random) {
            lost();
        }
    });
    $('#fourth').on('click', function() {
        playerScore = playerScore + number4;
        $('#total').text(playerScore);

        if(playerScore === random) {
            won();
        }
        else if (playerScore > random) {
            lost();
        }
    });
});

