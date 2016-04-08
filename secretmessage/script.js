// scroll path
$(document).ready(function() {
    console.log( "ready!" );
    
    var comment1 = getParameterByName('comment1');
    var comment2 = getParameterByName('comment2');
    console.log(comment1);
    console.log(comment2);
    
    $('.comment1').html(comment1);
    $('.comment2').html(comment2);
    
});



// form index page 
//  var inputName =getParameterByName("date");
//     console.log(inputName);
    
//  var inputName =getParameterByName("write");
//     console.log(inputName);
    
//  if (textarea) {
//     $('.message').html(textarea);
//   }




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

