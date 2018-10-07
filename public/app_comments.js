$(function () {

        
        const allComments = function () {
            $('#allComments').empty();
            $.ajax({ url: '/api/instagram', method: 'GET' })
                .then(function (allComments) {
                console.log('allComments')

                    })
                }
            
    allComments();

        const postItem = function (newComment) {
            $.ajax({ url: '/api/instagram', method: 'POST', data: newComment })
                .then(function (comments) {
                
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
    