// AM: With comments, it helps with readbility if you indent then so they begin exactly above where the code they are referencing begins.

$(document).ready(function(){
// setting variables
var selected = false
//reset button
// AM: Do you need to re-append the rings when the game is reset? Doesn't look like they ever disappear from the game...
$("#reset").click(function() {
  $("#left").append($("#ring1"), $("#ring2"), $("#ring3"), $("#ring4"), $("#ring5"))
})

$(".peg").click(function() {
// conditional
  if (selected === true) {  // AM: You could also write this as if(selected){ ... }
// logic
// compare .selected text against the text peg being clicked
    // AM: When the condition inside of an if-statement gets too long, I start to think about whether it would be helpful to save parts of it to a variable.
    // AM: For example, it might help with readability here if you save `$(this).children().eq(0)` to a variable at the start of the listener, and then reference that variable whenever you need it later in the listener.
    if (parseInt($(".selected").eq(0).text()) < parseInt($(this).children().eq(0).text()) || $(this).children().length === 0
  ) {
// execute this if logic is met
      $(this).prepend($(".selected"))
      $(".selected").removeClass("selected").css("border", "1px solid black")
      selected = false
// deselect
    } else {
      $(".selected").removeClass("selected").css("border", "1px solid black")
      selected = false
    }
// if there is no .selected
  } else {
      // AM: Consider creating a CSS class that contains the border property you wrote below.
      // AM: That way, instead of having to write out CSS properties and values in your Javascript, you can just say something like `.addClass(plain-border)` (or whatever you want to call it)
      $(this).children().eq(0).addClass('selected').css("border", "2px solid rgba(255, 255, 255, 0.7)")
      selected = true
    }
})
//hover clear
function clear() {
  $(this).css("background-color", "#fff").find(".expand:last").remove();
}
// hover instructions and about the game
// AM: Nice! Like this functionality.
// AM: Can talk about potential ways to refactor this so you don't have so many listeners during our 1:1.
$("#instructions").hover(function() {
    $(this).css({
      "background-color": "#F9AB1D",
      "cursor": "default"
      // AM: The below chunk of text is very long. Maybe it would be helpful to save it in a separate `.js` file that you can reference.
    }).append($("<div class='expand'><i><b>The Tower of Hanoi</b></i> (also called the Tower of Brahma or Lucas' Tower, and sometimes pluralized) is a mathematical game or puzzle. It consists of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.<br><br>The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:<br><ul><li>Only <i>one</i> disk can be moved at a time.<li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the <i>uppermost</i> disk on a stack.<li>No disk may be placed on top of a <i>smaller</i> disk.</ul></div>")) ;
  }, clear)
$("#history").hover(function() {
    $(this).css({
      "background-color": "#66D853",
      "cursor": "default"
    }).append($("<div class='expand'>The puzzle was invented by the French mathematician Édouard Lucas in 1883. There is a story about an Indian temple in Kashi Vishwanath which contains a large room with three time-worn posts in it surrounded by 64 golden disks. Brahmin priests, acting out the command of an ancient prophecy, have been moving these disks, in accordance with the immutable rules of the Brahma, since that time. The puzzle is therefore also known as the Tower of Brahma puzzle. According to the legend, when the last move of the puzzle will be completed, the world will end.It is not clear whether Lucas invented this legend or was inspired by it.<br><br>If the legend were true, and if the priests were able to move disks at a rate of one per second, using the smallest number of moves it would take them 2<sup><small>64</small></sup>−1 seconds or roughly 585 billion years to finish, which is about 42 times the current age of the Universe.<br><br>There are many variations on this legend. For instance, in some tellings, the temple is a monastery and the priests are monks. The temple or monastery may be said to be in different parts of the world — including Hanoi, Vietnam, and may be associated with any religion. In some versions, other elements are introduced, such as the fact that the tower was created at the beginning of the world, or that the priests or monks may make only one move per day.</div>")) ;
  }, clear)
  $("#about").hover(function() {
      $(this).css({
        "background-color": "#05D2D4",
        "cursor": "default"
      }).append($("<div class='expand'>Created with JavaScript & JQuery by <b>Lena Santana</b>. Many thanks to <b>Wes Coffay</b>, <b>Will Hawkins</b> and <b>Justin Shin</b> for being awesome and smart people that you are. Also thanks to <b>Eva Lai</b> and <b>Eric Green</b>, it was a team effort, guys. Thank you for giving me ideas and and thoughts on how to solve them, and I'm glad I could help in return.<br><br>Images are created by <b>Lena Santana</b>.</div>")) ;
    }, clear)
  $("#reset").hover(function() {
      $(this).css({
        "background-color": "#E94F01",
        "cursor": "default"
      }).append($("<div class='expand'>This will <i><b>reset</b></i> your game. Are you sure you want to proceed?</div>"))},
      clear)
})

// AM: Great job with this! You implemented full Tower of Hanoi functionality with concise code (without comments, ~50 lines!).

// AM: I'm not sure I totally understand your note about listing objects to append in order.
// AM: Let's talk about that more during our project 1:1.
