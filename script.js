$(document).ready(function(){

var selected = false
var ring1 = $("#ring1")
var ring2 = $("#ring1")
var ring3 = $("#ring1")
var rings = [ring1, ring2, ring3]
// var topRing = $(".peg").find(":first-child")
$(".peg").click(function() {
  if (selected === true) {
  $(this).prepend($(".selected"))
  console.log('hi')
  $(".selected").removeClass("selected")
  // topRing = $(this).find(":first-child")
  selected = false
} else {
  // if (jQuery.inArray(topRing, $(this))) {
    console.log("bye")
    $(this).find(":first-child").addClass('selected')
    selected = true
  // }
}
})
})
