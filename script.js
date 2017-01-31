$(document).ready(function() {
var rings = $(".peg").children()
var topRing = $("peg").find(":last-child")


$(".peg").mousedown(function() {
  if
  ($(this).children().eq(0))
   {
    // console.log($(this))
  $(function() {
    // $(this).children(".ring").eq(0)
    $(".ring").eq(0).draggable({grid: [20, 20]});
    $(".peg").droppable();
  })
      if ( (rings.indexOf($(this).children().eq(0).attr("id")) < rings.indexOf($(this).children().first().attr("id")) || $(this).children().length === 0) ) {
        $(".ring").eq(0).draggable({revert: "invalid"})
  } else {
    return
    }
  }
}
// $(".peg").mouseup(function() {
//   if (rings.indexOf($(this).children().eq(0).attr("id")) < rings.indexOf($(this).children().first().attr("id")) || $(this).children().length === 0) {
//     $(function() {
    // $(".peg").droppable();
    // console.log($(this))
  // })}
  // else {
  //   $(".ring").eq(0).draggable({revert: "invalid"})
})
  // })
// })
// if (rings.indexOf($(this).eq(0).attr("id")) {
 // {revert: "invalid"}
 // $( ".peg" ).droppable();
