//  Check off Specific Todos By clicking
$("li").click(function () {
    $(this).toggleClass("completed");
});

//Click on X to delete To-do
$("span").click(function (event) {
    $(this).parent().fadeOut( 500, function () {
        $(this).remove();
        });
   event.stopPropagation();
});