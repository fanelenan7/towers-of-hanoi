var ring1 = $("#ring1")
var ring2 = $("#ring2")
var ring3 = $("#ring3")
var rings = [ring1, ring2, ring3]

$(".ring").click(function() {
  if (($(this).css("order")) < ($(this).siblings("rings").css("order"))) {
    console.log($(this))
  // ($(".this").children().hasClass("div:first-child"))
      $(".ring").eq(0).css("background-color", "rebeccapurple")
  } else {
    return
    }
  })
// $(".peg").mouseup(function() {
//   if (rings.indexOf($(this).children().eq(0).attr("id")) < rings.indexOf($(this).children().first().attr("id")) || $(this).children().length === 0) {
//     $(function() {
//     $(".peg").droppable();
//     // console.log($(this))
//   })}
//   else {
//     $(".ring").eq(0).draggable({revert: "invalid"})
//     }
//   })
// })
// if (rings.indexOf($(this).eq(0).attr("id")) {
 // {revert: "invalid"}
 // $( ".peg" ).droppable();
