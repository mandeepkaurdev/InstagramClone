$(function () {

        
        const allComments = function () {
            $('#allComments').empty();
            $.ajax({ url: '/api/instagram', method: 'GET' })
                .then(function (newComment) {
                    newComment.forEach(ele => {
                        $('p').html();
                    });
                // console.log('new comment')

                    })
                }
            
    allComments();

        const postItem = function (newComment) {
            $.ajax({ url: '/api/instagram', method: 'POST', data: newComment })
                .then(function (comments) {
                let commentname = $('#newComment').val();
                    $('#allComments').append($($,{commentname}))
                })
    
    
            $('#allComments')
        }
    
        // const remove = function (remove) {
        //     $.ajax({ url: '/api/todoItems', method: 'DELETE', data: remove })
        //         .then(function () {
                    
                   
        //             $('delete').on('click', function(){
        //                 $(this).remove()
        //             })
        //         })
        // }
    
        $('#post').on('click', function () {
    
            const val = $('#newComment').val()
            postItem(val)
    
            //  remove();   
        });
    });
    