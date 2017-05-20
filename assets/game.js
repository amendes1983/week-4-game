$(document).ready(function(){
//variables
  var targetNumber = '';
  var score = 0;
  var wins = 0;
  var losses = 0;
 var scoreOptions = [1, 2, 10, 12];
  //functions in app
  for (var i = 0; i < scoreOptions.length; i++) {

//    var random = Math.floor(Math.random() * 1) + 12;
//   scoreOptions = random + scoreOptions;
 //};
// console.log(scoreOptions); Couldn't get this to work :(

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "assets/crystal_gif.gif");

    imageCrystal.attr("data-crystalvalue", scoreOptions[i]);

    $("#crystals").append(imageCrystal);
  };

  $(".crystal-image").on("click", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    score += crystalValue;
    console.log(score);


    if (score === targetNumber) {
      wins++;

    }

    else if (score >= targetNumber) {
      losses++;

    }
$('#Score').html('<h3>Score:' + score +  '</h3>');
$('#Wins').html('<h3>Wins:' + wins +  '</h3>');
$('#Losses').html('<h3>Losses:' + losses +  '</h3>');
  });

    $( "#start-button" ).click(function() {
     var targetNumber = ''
     for (var i = 0; i <  1; i++) {
        var random = Math.floor(Math.random() * 19) + 120;
       targetNumber = random + targetNumber;
     };
     console.log(targetNumber);

     $('#Target').html('<h3>Target Value:' + targetNumber +  '</h3>');
  });


});
