$(document).ready(function(){
// setting variables
var selected = false
var ring1 = $("#ring1")
var ring2 = $("#ring1")
var ring3 = $("#ring1")
ring1 < ring2
ring2 < ring3
// var rings = [ring1, ring2, ring3]
//
// $(".peg").click(function() {
//   console.log($(".peg").eq(0))
//  }
// )

$(".peg").click(function() {
  // console.log($(this))
  // console.log($(this).children().eq(0).text())
  // console.log($(".peg").children().eq(0).text())
// conditional
  if (selected === true) {
// logic
    if ($(this).children().eq(0).attr("id")) >= $(".peg").children().eq(0).attr("id") || 
  ) {

    $(this).prepend($(".selected"))
    console.log('hi')
    $(".selected").removeClass("selected")
    // topRing = $(this).find(":first-child")
    selected = false

  } else {
    // if (jQuery.inArray(topRing, $(this))) {
      console.log("bye")
      $(this).children().eq(0).addClass('selected')
      selected = true
  // }
}
})
})
