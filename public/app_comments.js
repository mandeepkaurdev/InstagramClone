/**
 * @fileoverview creates the user ability to add and display comment(s) to every picture posted on the page
 * @author Juliana Tyler
 */

$(document).ready(function(){
    $(function () {

/**
 * using GET path to retrieve documents from database within eachComment collection
 * only displays documents(comments) that correspond to that picture
 */
    const allComments = function () {
        $.ajax({ url: '/api/photos', method: 'GET'})
            .then(function (commentsForEach) {
                commentsForEach.forEach(eachPic => {
                    eachPic.comments.forEach( eachCommentOnPic => {
                        $(`#${eachPic._id}_divForComments`).append($(`<div class="DBComments"><b>Instagram_Clone</b> ${eachCommentOnPic.userComment}</div>`))
                    });
                });
             });
            };
           allComments();

/**
 * creates a new <div> for each input submitted within corresponding input to corresponding picture.
 * @param {object} allComment creates a new document with photoId and userCommen data and adds to database and server.
 * @param {object} photoid selects corresponding photo id to add a new input.
 * @param {string} theComment creates and adds a new comment input to display below the picture as comment.
 */

    const postItem = function (allComment, photoid, theComment) {
        $.ajax({ url: '/api/comments', method: 'POST', data:allComment})
            .then(function () {
                $(`#${photoid}_divForComments`).append($(`<div class="DBComments"><b>Instagram_Clone</b> ${theComment}</div>`));
            });
    };
   /**
    * on click "Enter", adds a new input to database and renders it to the page.
    */
    $('.container').on('click','.post', function (event) {
        event.preventDefault();
        const photoid = $(this).data('id'); 
        const val = $(`#${photoid}_input`).val()
        const obj = {
            userComment: val,
            photo_id: photoid
        };
        postItem(obj,photoid, val)   
    /**
     * after each submit, clears the input box under corresponding picture
     */   
        $(`#${photoid}_input`).val('');
    });
});
});