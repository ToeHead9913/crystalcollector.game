
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'images/crystal1.jpg',
        'images/crystal2.jpg',
        'images/crystal3.jpg',
        'images/crystal4.jpg'
    ];

    random_result = Math.floor(Math.random() * 60) + 30;

    //console.log(random_result);

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var randomNumber = Math.floor(Math.random() * 11) + 1;
        //console.log(randomNumber);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": randomNumber
        });

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > random_result) {

        lost++;

        $("#lost").html("Losses: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {

        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();
    }


});