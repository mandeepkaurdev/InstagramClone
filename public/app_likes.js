$('.red').hide()

$(function () {

    $(document).on('click', '.red', function () {
        $('.red').hide();
        $(".empty").show();
    });
    $(document).on('click', '.empty', function () {
        $('.empty').hide();
        $(".red").show();
    });
});
