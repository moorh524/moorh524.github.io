for (var increment = 0; increment < 100; increment++){
    $("body").append("<div class='ball'></div>");
};

$(window).resize(function() {
    $(".ball").each(function() {
        var ballTop = Math.floor(Math.random()* ($(window).height() - 100)) + "px";
        var ballleft = Math.floor(Math.random()* ($(window).width() - 100)) + "px";
        $(this).css("top",ballTop).css("left", ballleft);
        
    });
})
 