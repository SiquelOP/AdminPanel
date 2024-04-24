$(document).ready(function () {
    let xVal = 0, yVal = 0;

    $(window).mousemove(function (e) { 
        xVal = e.clientX - window.innerWidth / 2;
        yVal = e.clientY - window.innerHeight / 2;

        $('.paralax-elem').each( function() {
            const speed = $(this).data('speed');
            $(this).css({
                'translate': `calc(-50% + (${xVal}px * -${speed})) calc(-50% + (${yVal}px * -${speed}))`,
                'animation': `parallax ${speed}s ease-out infinite`
            });
        });
    });
});