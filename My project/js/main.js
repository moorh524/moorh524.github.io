console.log("Hello World");

var words = ["hello"]

$("body").css("background-color","pink");

    var dance = ["img/black.jpg","img/bubbleb.jpg","img/butt.jpg","img/dance.jpg"];

$("body").append("<img src='" + dance[Math.floor(Math.random()*dance.length)] + "'>")

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
 

