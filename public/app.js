$(function () {
    function render(userContent) {
        $('#galleryList').html(userContent);
    }

    const displayContent = () => {
        $.ajax({ url: 'api/photos', method: 'GET' })
            .then(function (data) {
                let content = '';
                if (data != '') {
                    data.forEach(e => {
                        content += `<img src='${e.photo_url}' class='gallery-image'>`;

                        //Heart display logic
                        content += `<div class="heartcomment">`
                        // if(e.likes.length > 0){
                        //     content += `<div>Likes : ${e.likes.length}</div>` ;
                        // } 
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


                        //Comments display logic
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
            });
    };



    displayContent();

    $('#addPhoto').on("click", function () { $('#inputUploadPhoto').click(); });
    $('#inputUploadPhoto').on("change", function () { $('#frmUpload').submit(); });

    $('#galleryList').on('click', '.remove', function () {

        $.ajax({ url: `/api/photo/${$(this).attr('photoId')}`, method: "DELETE" })
            .then(function (data) {
                //need this reload to show comments from get function 
                window.location.reload(true);
                // //////////////////
                console.log('deleted');
                displayContent();
            });
    })


})

