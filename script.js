// $(function() {
//   $( "#sortable1, #sortable2, #sortable3" ).sortable({
//     connectWith: ".connectedSortable"}).disableSelection()
// })
var rings = ["#ring1", "#ring2", "#ring3"]
// var towers

$(".peg").mousedown(function() {
  if
  ($(this).children().eq(0))
  // ($(".this").children().hasClass("div:first-child"))
   {
    // console.log($(this))
  $(function() {
    // $(this).children(".ring").eq(0)
    $(".ring").eq(0).draggable({grid: [20, 20]});
  })} else {
    return
    }
  })
$(".ring").mouseup(function() {
  if ($(this).css("order") < $(this).siblings(".rings").css("order") || $(this).siblings().length === 0) {
  // if (rings.indexOf($(this).children().eq(0).attr("id")) < rings.indexOf($(this).children().first().attr("id")) || $(this).children().length === 0) {
    $(function() {
      $(".ring").draggable({revert: "invalid"})
    $(".peg").droppable({
      accept: ".ring"
    });
    $(".peg").prepend($(this))
    console.log($(this))
  })}
  else {
    return;
    }
  })
// })
// if (rings.indexOf($(this).eq(0).attr("id")) {
 // {revert: "invalid"}
 // $( ".peg" ).droppable();
