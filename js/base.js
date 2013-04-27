$('#main').click(function(e) {
    var target = $(e.target),
        img = $('.image'),
        src = img.attr('src'),
        targetId = target.attr('id'),
        current = parseInt(src.match(/\d{1,2}\.jpg$/));
    if (targetId !== 'right' && targetId !== 'left') {
        return;
    }
    if (target.attr('id') === 'right' ) {
        if (current == 57) {
            current = 1;
        }
        else {
            current = current + 1;
        }
    }
    if (target.attr('id') === 'left' ) {
        if (current == 1) {
            current = 57;
        }
        else {
            current = current - 1;
        }
    }
    img.hide();
    img.attr('src', 'img/' + current + '.jpg');
    img.fadeIn();
});
