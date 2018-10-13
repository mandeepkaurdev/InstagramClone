$(function () {

        
    const allComments = function () {
        // $('#allComments').empty();
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
        const userData = {userComment : allComment}
        $.ajax({ url: '/api/comments', method: 'POST', data:userData })
            .then(function () {
                console.log('submitted comment: '+ allComment)
                $('.allComments').append($(`<div> ${'Instagram clone' ,$('.newComment').val()}<i class=""></i></div>`))
            })


        $('.allComments')
    }

    $('.container').on('click','.post', function () {    
        const val = $('.newComment').val()
        postItem(val)

      
    });
});
