$(document).ready(function () {
    $('.refresher').css({
        'top': '0',
        'display': 'block'
    })
    $('.blur').css('display', 'block');

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

    $('.hrefButton').click(function() {
        let location = $(this).data('href');
        
        $('.refresher').css({
            'display': 'block',
            'backdrop-filter': 'blur(50px)'
        });
        $('.refresher').animate({
            'top': '0',
        }, 'fast', function() {
            console.log('1223');
            window.location.href = location;
        });
    })
});