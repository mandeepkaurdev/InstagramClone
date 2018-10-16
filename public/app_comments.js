$(function () {

    const allComments = function () {
        $.ajax({ url: '/api/comments', method: 'GET' })
            .then(function (allComments) {
                // console.log("app_comments.js allcomments: ");
                console.log(allComments);
                let htmlstr = '';
               allComments.forEach(e => {
                    htmlstr += `<div class="DBComments">InstagramClone ${e.userComment}`
               })
               $('.allComments').html(htmlstr)
             })
            
            }
            allComments();

    const postItem = function (allComment) {
        //add photo_url to the object below
        $.ajax({ url: '/api/comments', method: 'POST', data:allComment})
            .then(function () {
                console.log('submitted comment: '+ allComment)
                $('.allComments').append($(`<div class="DBComments">InstagramClone ${$('.newComment').val()}</div>`))
            })
    }

    $('.container').on('click','.post', function () {   
        // const inputId = '#'+ event.target.id;
        // const comment = inputId.split("_")[0]+"_post";
        const obj = {
            userComment: $('.newComment').val(),
            photo_url: $('.gallery-image').attr('src')
        }
        // $(inputId).show()
        postItem(obj)      
    });

  function enterKey(event){
      event.preventDefault()
    //   if (event.keyCode == 13){
        //   console.log(1)
    //   }
  }

});
