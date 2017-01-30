// $(function() {
//   $( "#sortable1, #sortable2, #sortable3" ).sortable({
//     connectWith: ".connectedSortable"}).disableSelection()
// })
rings = ["#ring1", "#ring2", "ring3"]
var towers

$(".peg").mousedown(function() {
  if
  ($(this).children(".ring").eq(0))
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
$(".peg").mouseup(function() {
  if (rings.indexOf($(this).children(".ring").eq(0).attr("id")) < rings.indexOf($(this).children(".peg:first-child").attr("id")) || $(this).children().length === 0) {
    $(function() {
    $(".peg").droppable({
      accept: ".ring",
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active"
    });
    // console.log($(this))
  })}
  else {
    $(function() {
      $(".ring").eq(0).draggable({revert: true});
    })
  }
})
// if (rings.indexOf($(this).eq(0).attr("id")) {
 // {revert: "invalid"}
 // $( ".peg" ).droppable();
