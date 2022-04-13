var moblie = () => {
    $('.nav-right').hide();
    $('#hamburger').show();
    $('.nav-left>a>img').css('width', '60px');
    $('.nav-left>a>img').css('margin', '0');
    $('.nav-left>h2').css('margin', '0');
    $('.nav-left>h2').css('position', 'absolute');
    $('.nav-left>h2').css('top', '50%');
    $('.nav-left>h2').css('left', '50%');
    $('.nav-left>h2').css('transform', 'translate(-50%, -50%)');
    $('#hamburger span').css('height', '2px');
    $('#hamburger').css('margin-top', '20px');
    $('div.intro').css('display', 'block');
    $('div.intro>h1').css('margin', '0');
    $('div.intro>h1').css('width', '100%');
    $('div.intro>h1').css('text-align', 'center');
    $('div.intro>h1').css('border-bottom', '1px solid var(--rThemeColor)');
    $('div.intro>h1').css('border-right', 'none');
}

var pc = () => {
    $('.nav-right').show();
    $('.nav-right').css('display', 'flex');
    $('#hamburger').hide();
    $('.nav-left>a>img').css('width', '100px');
    $('.nav-left>a>img').css('margin', '0');
    $('.nav-left>h2').css('margin', '0 0 0 50px');
    $('.nav-left>h2').css('position', 'static');
    $('.nav-left>h2').css('transform', 'none');
    $('#hamburger span').css('height', '4px');
    $('#hamburger').css('margin-top', '15px');
    $('div.intro').css('display', 'flex');
    $('div.intro>h1').css('margin', 'auto');
    $('div.intro>h1').css('width', 'auto');
    $('div.intro>h1').css('text-align', 'auto');
    $('div.intro>h1').css('border-bottom', 'none');
    $('div.intro>h1').css('border-right', '1px solid var(--rThemeColor)');
}

$(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        $('#fullscreenNav').toggleClass('open');
    });
});

var showPhoto = src => {
    src = src.src;
    window.open(src, '_blank');
}

var submitWx = () => {
    var url = 'https://xfeedback.herokuapp.com/send?topic=[TOPIC]&user=[USERNAME]&message=[BODY]&api=dVxfQDLHuRH8pJq1cLMNB981T9i1SyQ3D8ONoNegQbNofqN9dcXA9MC6XnSuMQ0k';
    var topic = "微信";
    var username = $('#bz').val();
    var body = $('#why').val() + ' wx:' + $('#wx').val();
    url = url.replace('[TOPIC]', topic).replace('[USERNAME]', username).replace('[BODY]', body);
    $.get(url);
    alert('搞定啦~');
}