$(document).ready(function() {
    progressBar();
});
    
var progressBar = (function() {
    $('#progress1').animate({
        width: '50%'
    });

    $('#progress2').animate({
        width: '75%'
    });
});