$(function(){
    function render(userContent) {
        $('#galleryList').html(userContent);
    }

    const displayContent = () => {
        $.ajax({ url: 'api/photos', method: 'GET' })
            .then(function (data) {
                let content = '';
                if (data != '') {
                    data.forEach(e => content += `<img src='${e.photo_url}' class='gallery-image'>
                        <div class="heartcomment">
                        <i class="far fa-heart empty" id=${e._id}_empty></i>
                        <i class="fas fa-heart red" style="display:none; color: red;" id=${e._id}_red></i>
                        &nbsp;
                        <i class="far fa-comment"></i>
                        <button photoId='${e._id}' class='remove big-icon'><i class="fas fa-times"></i></button>
                        </div>
                        
                        <div class="allComments" id='${e._id}_divForComments' data-photourl="${e._id}">`+
                        // e.comments.forEach( eachCommentOnPic => {
                        //     console.log("line 31 app.js: "+ eachCommentOnPic.userComment)
                        //     console.log(`#${e._id}_divForComments`)
                        //     $(`<div class="DBComments">InstagramClone ${eachCommentOnPic.userComment}</div>`))
                        // }) +
                        `</div>
                        <div class="commentInput">
                        <form onsubmit="enterKey()">
                        <input type="text" placeholder="place your comment here" class="newComment" id="${e._id}_input"/>
                        <input type="submit" class="post" data-id="${e._id}"/>
                        </form></div> 
                        <div style="height: 50px"></div>`

                    );
                    // data.forEach(eachPic => {
                    //     eachPic.comments.forEach( eachCommentOnPic => {
                    //         console.log("line 31 app.js: "+ eachCommentOnPic.userComment)
                    //         $(`#${eachPic.id}_divForComments`).append($(`<div class="DBComments">InstagramClone ${eachCommentOnPic.userComment}</div>`))
                    //     })
                    // })
                }
                else {
                    content = `<img src="./Image/blank.jpg" class="gallery-image" alt="">`;
                };
                render(content);
            });
    };


    // const addNewPhoto = () => {
    //     const addedURL = 
    //     $.ajax({url: 'api/photos', method: 'POST', data: {photo_url: addedURL}})
    //     .then(function(data){
    //         displayContent();
    //     });
    // };

    displayContent();

    $('#addPhoto').on("click", function () { $('#inputUploadPhoto').click(); });
    $('#inputUploadPhoto').on("change", function () { $('#frmUpload').submit(); });

    $('#galleryList').on('click', '.remove', function () {

        //$.ajax({url: "/api/photo/" + $(this).attr('photoId'), method: "DELETE" })
        $.ajax({ url: `/api/photo/${$(this).attr('photoId')}`, method: "DELETE" })
            .then(function (data) {
                console.log('deleted');
                displayContent();
            });
    })


})
