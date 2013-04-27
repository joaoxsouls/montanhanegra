$('#main').click(function(e) {
    var target = $(e.target),
        img = $('img'),
        src = img.attr('src'),
        targetClass = target.attr('class'),
        current = parseInt(src.match(/\d{1,2}\.jpg$/));
    console.log(img);
    if (targetClass !== 'right' && targetClass !== 'left') {
        return;
    }
    if (target.attr('class') === 'right' ) {
        if (current == 60) {
            current = 1;
        }
        else {
            current = current + 1;
        }
    }
    if (target.attr('class') === 'left' ) {
        if (current == 1) {
            current = 60;
        }
        else {
            current = current - 1;
        }
    }
    img.hide();
    img.attr('src', 'img/' + current + '.jpg');
    window.setTimeout(function () {
        img.css('margin-left', '-' + img.width()/2 + 'px');
        img.css('margin-top', '-' + img.height()/2 + 'px');
        img.fadeIn('slow');
    }, 100);
});
