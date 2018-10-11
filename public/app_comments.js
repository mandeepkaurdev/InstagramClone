$(function () {

        
        const allComments = function () {
            // $('#allComments').empty();
            $.ajax({ url: '/api/comments', method: 'GET' })
                .then(function (allComments) {
                    console.log("app_comments.js allcomments: ");
                    console.log(allComments);
                    let htmlstr = '';
                   allComments.forEach(ele => {
                        htmlstr += `<div> ${ele.userComment}`
                   })
                   $('.allComments').html(htmlstr)
                    
              
                   
                // let htmlstr = '';
                // allComments.forEach(ele => {
                //     htmlstr = `<div> ${ele.comments}</div>`;

                // // console.log('all comments')
                //  });
                //  $('#allComments').html(htmlstr)
                // console.log('all added comments')
                 })
                
                }
                allComments();

        const postItem = function (allComment) {
            const userData = {userComment : allComment}
            $.ajax({ url: '/api/comments', method: 'POST', data:userData })
                .then(function () {
                    // console.log("app_comments line 26")
                    // console.log(comments)
                    console.log('submitted comment: '+ allComment)
                    $('.allComments').append($(`<div>${$('.newComment').val()}</div>`))
                })
    
    
            $('.allComments')
        }
    
        // const remove = function (remove) {
        //     $.ajax({ url: '/api/todoItems', method: 'DELETE', data: remove })
        //         .then(function () {
                    
                   
        //             $('delete').on('click', function(){
        //                 $(this).remove()
        //             })
        //         })
        // }
    
        $('.post').on('click', function () {    
            const val = $('.newComment').val()
            postItem(val)
    
            //  remove();   
        });
    });
