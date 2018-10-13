$(document).ready(function(){
$('.red').hide();

$(function(){
    $(document).on('click', '.red', function (event) {
        const iconId = '#'+ event.target.id;
        const empty = iconId.split("_")[0]+"_empty";
        const red = iconId.split("_")[0]+"_red";
        $(red).hide();
        $(empty).show();
    });
    $(document).on('click', '.empty', function (event) {
        const iconId = '#'+ event.target.id;
        const empty = iconId.split("_")[0]+"_empty";
        const red = iconId.split("_")[0]+"_red";   
        $(red).show();
        $(empty).hide();
    });
})
})