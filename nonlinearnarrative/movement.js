$(".purple").mouseover(function(){
    var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    $(this).css("background-color",newColor);
    });