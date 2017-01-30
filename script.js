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
    console.log($(this))
  $(function() {
    // $(this).children(".ring").eq(0)
    $(".ring").draggable({snap: true});
  })} else {
    return
    }
  })
$(".peg").mouseup(function() {
  if ($(this).children(".ring").eq(0)) {
    $(function() {
    $(".peg").droppable();
  })} else {
    $(function() {
      $(".ring").draggable({revert: "invalid"});
    })
  }
})
// if (rings.indexOf($(this).eq(0).attr("id")) {
 // {revert: "invalid"}
 // $( ".peg" ).droppable();
