// scroll path

$(document).ready(function() {
    console.log( "ready!" );

    var comment1 = getParameterByName('comment1');
    var comment2 = getParameterByName('comment2');
    console.log(comment1);
    console.log(comment2);

    $('.comment1').html(comment1);
    $('.comment2').html(comment2);


    // The below sets up defaults for how the
    // movement along the path happens. You
    // can set the speed, etc. I slowed it down a bit.
    var path = $.fn.scrollPath("getPath",{
        scrollSpeed: 20, // Default is 50
        rotationSpeed: Math.PI / 10 // Default is Math.PI / 15
    });

    // Use the below to set up the line that the browser follows.
    // moveTo is where it starts. lineTo are coordinates. You can
    // add as many as you want. There are more things you can do if
    // you look at the documentation.
    // One thing to think about is that you can have things happen
    // when you get to certain points. That might be something to
    // explore in the design? I did something just to show you how
    // it works.
    path.moveTo(200,200)
        .lineTo(760,200)
        .lineTo(500,2000, {
            rotate: 2 * Math.PI,
        })
        .lineTo(900,2000)
        .lineTo(2199,2000)
        .lineTo(2222, 450)
        .lineTo(3000,600)
        // .lineTo(450, 750)
        .lineTo(450,750, {
            rotate: 1 * Math.PI,
        });
        

    // Finally this initializes the path on the screen. I've turned
    // I left the line on so you can see what you're drawing, but
    // you can comment that out and it will disappear.
    
    
    //DRAW PATH= FALSE TO GET RID OF LINE
    $(".scroll-container").scrollPath({
        drawPath: true,
        scrollBar: false,
        wrapAround: true
    });

});


function getParameterByName(name) {
    url = window.location.href;
    url = url.toLowerCase();
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

