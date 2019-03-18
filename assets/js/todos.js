//  Check off Specific Todos By clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete To-do
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut( 500, function () {
        $(this).remove();
        });
   event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if(event.which === 13){
        //grabbing new to do text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
});
