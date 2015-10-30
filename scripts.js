$("body").css("background-color","pink");

$("h1").html("Welcome to JQUERY");

$(".bigredbutton").click(function() {
    console.log("you clicked it")
    $("h1").toggleClass("white")
});

$(".bigredbutton").mousedown(function() {
    console.log("you clicked it")
    $("h1").css("background-color", "lime")
});

$(".bigredbutton").mousemove(function() {
    console.log("mouse moved")
    $("h1").css("background-color", "lime")
});

console.log("Random String of Numbers and Symbols");
console.log("*************");

var symbols = ["*", "@", "#", "&","%", "!", "^" ]
var pattern = "*";

for (var increment = 5; increment < symbols.length; increment++) {
    console.log(symbols);
    pattern = pattern + symbols[increment];
    var exclamation = "~";
    for(var anything =0; anything < 30; anything++) {
        if (anything == 15) {
            exclamation = "~";
        }
        console.log(anything);
        console.log(exclamation);
        exclamation = exclamation + symbols[Math.floor(Math.random()*symbols.length)];
        //console.log(Math.random()*10);
        

    }
}

function addNums(num1,num2) {
    var sum = num1 +num2;
    return sum; 
    
}