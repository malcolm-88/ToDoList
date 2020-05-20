liGray();
deleteLi();

$("input").keypress(function (event) {
    if (event.which == 13) {
        $( "<li><span>X</span> "+ $(this).val() +"</li>" ).appendTo( "ul" );
        $(this).val("");

    }
});

function liGray() {
    $(document).on("click", "li", function () {
        $(this).toggleClass("grayOut");
        // $(this).css("text-decoration","line-through"); 
        // $(this).css("color","gray"); 
     }); 
}

function deleteLi() {
    $(document).on("click", "span", function () {
        $(this).closest("li").remove(); 
     });
}