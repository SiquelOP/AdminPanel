$(document).ready(function () {
    $('.refresher').delay('500').animate({
        'top': '100%'
    }, 750, function() {
        $('.refresher').css('display', 'none');
        $('.blur').css('display', 'none');
        $('body').css('overflow', 'visible');
    });

    let step = 50;
    
    setTimeout( function() {
        const interval = setInterval( function() {
            $('.blur').css('backdrop-filter', 'blur(' + step + 'px)');
            if(step == 0) clearInterval(interval);
            step--;
        }, 15);
    }, 500);
});