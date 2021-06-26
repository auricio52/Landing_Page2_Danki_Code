$(() => {
    $('nav a').click(() => {
        var href = $(this).attr('href');
        var offsetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop': offsetTop}, 4000);

        return false;
    })
})