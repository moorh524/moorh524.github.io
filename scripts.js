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
