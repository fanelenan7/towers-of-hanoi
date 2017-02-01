$(document).ready(function(){
// setting variables
var selected = false
//reset button
$("#reset").click(function() {
  $("#left").append($("#ring1"), $("#ring2"), $("#ring3"), $("#ring4"), $("#ring5"))
})

$(".peg").click(function() {
// conditional
  if (selected === true) {
// logic
// compare .selected text against the text peg being clicked
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
      $(this).children().eq(0).addClass('selected').css("border", "2px solid rgba(255, 255, 255, 0.7)")
      selected = true
    }
})
// hover instructions and about the game
$("#instructions").hover(function() {
    $(this).css({
      "background-color": "#F9AB1D",
      "cursor": "default"
    }).append($("<div class='expand'><i><b>The Tower of Hanoi</b></i> (also called the Tower of Brahma or Lucas' Tower, and sometimes pluralized) is a mathematical game or puzzle. It consists of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.<br><br>The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:<br><ul><li>Only <i>one</i> disk can be moved at a time.<li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the <i>uppermost</i> disk on a stack.<li>No disk may be placed on top of a <i>smaller</i> disk.</ul></div>")) ;
  }, function() {
    $(this).css("background-color", "#fff").find(".expand:last").remove();
  }
)
$("#history").hover(function() {
    $(this).css({
      "background-color": "#66D853",
      "cursor": "default"
    }).append($("<div class='expand'>The puzzle was invented by the French mathematician Édouard Lucas in 1883. There is a story about an Indian temple in Kashi Vishwanath which contains a large room with three time-worn posts in it surrounded by 64 golden disks. Brahmin priests, acting out the command of an ancient prophecy, have been moving these disks, in accordance with the immutable rules of the Brahma, since that time. The puzzle is therefore also known as the Tower of Brahma puzzle. According to the legend, when the last move of the puzzle will be completed, the world will end.It is not clear whether Lucas invented this legend or was inspired by it.<br><br>If the legend were true, and if the priests were able to move disks at a rate of one per second, using the smallest number of moves it would take them 2<sup><small>64</small></sup>−1 seconds or roughly 585 billion years to finish, which is about 42 times the current age of the Universe.<br><br>There are many variations on this legend. For instance, in some tellings, the temple is a monastery and the priests are monks. The temple or monastery may be said to be in different parts of the world — including Hanoi, Vietnam, and may be associated with any religion. In some versions, other elements are introduced, such as the fact that the tower was created at the beginning of the world, or that the priests or monks may make only one move per day.</div>")) ;
  }, function() {
    $(this).css("background-color", "#fff").find(".expand:last").remove();
  })
  $("#about").hover(function() {
      $(this).css({
        "background-color": "#05D2D4",
        "cursor": "default"
      }).append($("<div class='expand'>Created with JavaScript & JQuery by <b>Lena Santana</b>. Many thanks to <b>Wes Coffay</b>, <b>Will Hawkins</b> and <b>Justin Shin</b> for being awesome and smart people that you are. Also thanks to <b>Eva Lai</b> and <b>Eric Green</b>, it was a team effort, guys. Thank you for giving me ideas and and thoughts on how to solve them, and I'm glad I could help in return.<br><br>Images are created by <b>Lena Santana</b>.</div>")) ;
    }, function() {
      $(this).css("background-color", "#fff").find(".expand:last").remove()
    }
  )
  $("#reset").hover(function() {
      $(this).css({
        "background-color": "#E94F01",
        "cursor": "default"
      }).append($("<div class='expand'>This will <i><b>reset</b></i> your game. Are you sure you want to proceed?</div>"))},
      function() {
        $(this).css("background-color", "#fff").find(".expand:last").remove()
      })

})
