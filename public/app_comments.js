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
        // const userData = {userComment : allComment}
        // const photo = {photo_url: }
        $.ajax({ url: '/api/comments', method: 'POST', data:allComment})
            .then(function () {
                console.log('submitted comment: '+ allComment)
                $('.allComments').append($(`<div class="DBComments">InstagramClone ${$('.newComment').val()}</div>`))
            })
    }

    $('.container').on('click','.post', function () {    
        const val = $('.newComment').val()
        const obj = {
            userComment: $('.newComment').val(),
            photo_url: $('.gallery-image').attr('src')
        }
        postItem(obj)      
    });

  function enterKey(event){
      event.preventDefault()
    //   if (event.keyCode == 13){
          console.log(1)
    //   }
  }
});
// $(document).ready(function(){
//     $('.newComment').bind("enterKey",function(e){
//       alert("Enter key pressed");
//     });
//     $('.newComment').keyup(function(e){
//       if(e.keyCode == 13)
//       {
//          $(this).trigger("enterKey");
//       }
//     });
//  });