$(document).ready(function () {
    $('.red').hide();


       const getLikes = function () {
            $.ajax({ url: '/api/likes', method: 'GET' })
                .then(function (getLikes) {

                });

        }
        //getLikes();

    $(document).on('click', '.red', function (event) {
        $(this).data('isLiked', false);
        const iconId = '#' + event.target.id;
        const empty = iconId.split("_")[0] + "_empty";
        const red = iconId.split("_")[0] + "_red";
        $(red).hide();
        $(empty).show();
    });
    $(document).on('click', '.empty', function (event) {
        $(this).data('isLiked', true);
        const iconId = '#' + event.target.id;
        const empty = iconId.split("_")[0] + "_empty";
        const red = iconId.split("_")[0] + "_red";
        $(red).show();
        $(empty).hide();
    });

    const updateLikes = function (e) {
        console.log($(this).data('isLiked'));
        const isLiked = $(this).data('isLiked');
        const mongoId = $(this).attr('id').split("_")[0];
        console.log(mongoId);
        const likeData = { isLiked: isLiked, _id: mongoId };
        $.ajax({ url: '/api/likes', method: 'POST', data: likeData })
            .then(function (updateLikes) {
                console.log(updateLikes);
        })
    }

    $(document).on('click', '.red', updateLikes);
    $(document).on('click', '.empty', updateLikes);
})