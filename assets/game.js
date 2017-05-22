$(document).ready(function(){
//variables
  var targetNumber = '';
  var score = 0;
  var wins = 0;
  var losses = 0;
  var guesses = 10;
 var scoreOptions = [1, 2, 10, 15];
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
    guesses --;
    console.log(guesses);

    if (score === targetNumber && (guesses === 0))  {
      wins++;
      alert('You are worthy!')
      location.reload();
    }

    else if (score >= targetNumber && (guesses === 0))  {
      losses++;
      alert('You have dipleased the Guild Master');
      location.reload();
    }
    //Update HTML fo user
$('#Score').html('<h3>Score:' + score +  '</h3>');
$('#Wins').html('<h3>Wins:' + wins +  '</h3>');
$('#Losses').html('<h3>Losses:' + losses +  '</h3>');
$('#guesses').html('<h3>Guesses:' + guesses + '</h3>')
  });
//Pick Number for user to guess
    $( "#start-button" ).click(function() {
     var targetNumber = ''
     for (var i = 0; i <  1; i++) {
        var random = Math.floor(Math.random() * 19) + 120;
       targetNumber = random + targetNumber;
     };
     console.log(targetNumber);


//Update HTML for user
     $('#Target').html('<h3>Target Value:' + targetNumber +  '</h3>');
  });


});
