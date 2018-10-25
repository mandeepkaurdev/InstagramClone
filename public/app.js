/**
 * @fileoverview creates the user ability to upload, delete, and display photos along with associated comments and likes. 
 * @author Gina Yi
 */
$(function () {
    /**
     * Populates gallery list with userContent
     * @param {string} userContent - The user content to display
     */
    function render(userContent) {
        $('#galleryList').html(userContent);
    }

    /** 
     * Displays photos with associated comments and likes.
     * Retrieves photos via ajax call 
     */
    const displayContent = () => {
        $.ajax({ url: 'api/photos', method: 'GET' })
            .then(function (data) {
                let content = '';
                if (data != '') {
                    data.forEach(e => {
                        content += `<img src='${e.photo_url}' class='gallery-image'>`;

                        content += `<div class="heartcomment">`
                        if (e.likes.length > 0) {

                            if (e.likes[e.likes.length - 1].likes) {
                                content += ` <i class="fas fa-heart red" style="color: red;" id=${e._id}_red></i>
                                            <i class="far fa-heart empty" style="display:none;" id=${e._id}_empty></i>`
                            }
                            else {
                                content += ` <i class="fas fa-heart red" style="display:none; color: red;" id=${e._id}_red></i>
                                            <i class="far fa-heart empty"  id=${e._id}_empty></i>`
                            }
                        }
                        else {
                            content += ` <i class="fas fa-heart red" style="display:none; color: red;" id=${e._id}_red></i>
                            <i class="far fa-heart empty" id=${e._id}_empty></i>`
                        }
                            content += `&nbsp;
                        <i class="far fa-comment"></i>
                        <button photoId='${e._id}' class='remove big-icon'><i class="fas fa-times"></i></button>
                        </div>`

                        content += `<div class="allComments" id='${e._id}_divForComments' data-photourl="${e._id}"></div>`;
                        content +=   `<div class="commentInput">
                        <form onsubmit="enterKey()">
                        <input type="text" placeholder="place your comment here" class="newComment" id="${e._id}_input"/>
                        <input type="submit" class="post" data-id="${e._id}"/>
                        </form></div> 
                        <div style="height: 50px"></div>`
                    }
                    );
                }
                else {
                    content = `<img src="./Image/blank.jpg" class="gallery-image" alt="">`;
                };
                render(content);
            })
            .catch(function (err) {
                res.json(err);
            });
    };
    displayContent();
    /**
     * Opens file selection window to select a photo
     */
    $('#addPhoto').on("click", function () { $('#inputUploadPhoto').click(); });
    /**
     * Submits form to post a photo uploaded to #inputUploadPhoto input
     */
    $('#inputUploadPhoto').on("change", function () { $('#frmUpload').submit(); });

    /**
     * Removes a photo from the gallery list
     */
    $('#galleryList').on('click', '.remove', function () {

        $.ajax({ url: `/api/photo/${$(this).attr('photoId')}`, method: "DELETE" })
            .then(function (data) {
                //need this reload to show comments from get function 
                window.location.reload(true);
            })
            .catch(function (err) {
                res.json(err);
            });
    })
})

