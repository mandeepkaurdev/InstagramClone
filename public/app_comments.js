$(function () {

        
    const allComments = function () {
        $.ajax({ url: '/api/comments', method: 'GET' })
            .then(function (allComments) {
                console.log("app_comments.js allcomments: ");
                console.log(allComments);
                let htmlstr = '';
               allComments.forEach(e => {
                    htmlstr += `<div> ${e.userComment}`
               })
               $('.allComments').html(htmlstr)
                
             })
            
            }
            allComments();

    const postItem = function (allComment) {
        //add photo_url to the object below
        const userData = {userComment : allComment}
        $.ajax({ url: '/api/comments', method: 'POST', data:userData })
            .then(function () {
                console.log('submitted comment: '+ allComment)
                $('.allComments').append($(`<div> ${$('.newComment').val()}</div>`))
            })


        $('.allComments')
    }

    $('.container').on('click','.post', function () {    
        const val = $('.newComment').val()
        postItem(val)

      
    });
});
