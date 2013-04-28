$(document).delegate('#left, #right, #logo', 'click', function(e) {
    var target = $(e.target),
        img = $('#image img'),
        src = img.attr('src'),
        targetId = target.attr('id'),
        current = parseInt(src.match(/\d{1,2}\.jpg$/));
    if (target.attr('id') === 'logo') {
        img.parent().toggle();
        return;
    }
    if (target.attr('id') === 'right' ) {
        if (current == 52) {
            current = 1;
        }
        else {
            current = current + 1;
        }
    }
    if (target.attr('id') === 'left' ) {
        if (current == 1) {
            current = 52;
        }
        else {
            current = current - 1;
        }
    }
    img.hide();
    img.attr('src', 'img/' + current + '.jpg');
    img.fadeIn();
});
