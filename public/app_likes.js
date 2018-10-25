/**
 * @fileoverview Adds the user ability to 'like' and 'unlike' a photo by clicking on the heart icon.
 * 
 * @author Veronica Lee
*/

/**
 * Keeps the red heart hidden upon the page loading.
 */
$(document).ready(function () {
    $('.red').hide();

    /**
    * Likes a photo by showing the red heart icon and hiding empty heart icon and upon clicking.
    */
    $(document).on('click', '.empty', function (event) {
        $(this).data('isLiked', true);
        const iconId = '#' + event.target.id;
        const empty = iconId.split("_")[0] + "_empty";
        const red = iconId.split("_")[0] + "_red";
        $(red).show();
        $(empty).hide();
    });

    /**
     * Unlikes a photo by showing the empty heart icon and hiding red heart icon and upon clicking.
     */
    $(document).on('click', '.red', function (event) {
        $(this).data('isLiked', false);
        const iconId = '#' + event.target.id;
        const empty = iconId.split("_")[0] + "_empty";
        const red = iconId.split("_")[0] + "_red";
        $(red).hide();
        $(empty).show();
    });

    /**
     * Posts like/unlike information to database.
     */
    const updateLikes = function (e) {
        const isLiked = $(this).data('isLiked');
        const mongoId = $(this).attr('id').split("_")[0];
        const likeData = { isLiked: isLiked, _id: mongoId };
        $.ajax({ url: '/api/likes', method: 'POST', data: likeData })
            .then(function (updateLikes) {
            })
    }

    $(document).on('click', '.red', updateLikes);
    $(document).on('click', '.empty', updateLikes);
})