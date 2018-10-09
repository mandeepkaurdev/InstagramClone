$(function () {

        
        const allComments = function () {
            // $('#allComments').empty();
            $.ajax({ url: '/api/instagram', method: 'GET' })
                .then(function (allComments) {
                // let htmlstr = '';
                // allComments.forEach(ele => {
                //     htmlstr = `<div> ${ele.comments}</div>`;

                // // console.log('all comments')
                //  });
                //  $('#allComments').html(htmlstr)
                console.log('all added comments')
                 })
                
                }
                allComments();

        const postItem = function (allComment) {
            $.ajax({ url: '/api/instagram', method: 'POST', datatype: text })
                .then(function (comments) {
                    $('#allComments').append($(`<div>`,{text: $('#newComment').val()}`</div>`))
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
    