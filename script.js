$(document).ready(function(){
// setting variables
var selected = false

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
      $(this).children().eq(0).addClass('selected').css("border", "2px solid white")
      selected = true
    }
})
})
