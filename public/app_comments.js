$(document).ready(function(){
    $(function () {



    // const allComments = function () {
    //     $.ajax({ url: '/api/photos', method: 'GET'})
    //         .then(function (allPhotos) {
    //             allPhotos.forEach(eachPic => {
    //                 eachPic.comments.forEach( eachCommentOnPic => {
    //                     console.log("line 10 app_comments.js: "+ eachCommentOnPic.userComment)
    //                     $(`#${eachPic.id}_divForComments`).append($(`<div class="DBComments">InstagramClone ${eachCommentOnPic.userComment}</div>`))
    //                 })
    //             })
    //          })
            
    //         }
    //         allComments();

    const postItem = function (allComment, photoid, theComment) {
        //add photo_url to the object below
        $.ajax({ url: '/api/comments', method: 'POST', data:allComment})
            .then(function () {
                console.log('submitted comment: ', allComment)
                $(`#${photoid}_divForComments`).append($(`<div class="DBComments">InstagramClone ${theComment}</div>`))
            })
    }

    $('.container').on('click','.post', function (event) {
        event.preventDefault();
        const photoid = $(this).data('id'); 
        const val = $(`#${photoid}_input`).val()
        const obj = {
            userComment: val,
            photo_id: photoid
            
        }
        postItem(obj,photoid, val)      
    });

//   function enterKey(event){
//       event.preventDefault()
//     //   if (event.keyCode == 13){
//           console.log(1)
//     //   }
//   }

});
})