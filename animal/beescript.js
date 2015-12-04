//$(".hexagon").mouseenter(function() {
//	$(".bee1").show(".bee1")
//	$(".bee1").hide(".bee1")
//});
//	$(".hexagon").mouseleave(function() {
//	$(".bee1").hide(".bee1")
//	$(".hexagon").show(".hexagon")
//});

//$(".hexagon4").mouseenter(function() {
//	$("larvae1").show(".larvae1")
//	$(".hexagon4").hide("hexagon4"
// );
 //	$(".hexagon4").mouseleave(function() {
 //	$(".larvae1").hide(".larvae1")
 //	$(".hexagon4").show(".hexagon4")
 //	});


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
 