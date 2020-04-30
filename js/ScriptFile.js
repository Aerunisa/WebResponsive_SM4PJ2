$(document).ready(function(){
    $("#flip").bind("click", function(){
        $("#panel").slideDown("slow");
    });
    $("#btn").bind("click", function(){
        $("#panel").slideUp("slow");
    });
});