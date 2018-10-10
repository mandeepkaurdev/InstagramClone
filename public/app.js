
$(function () {
    function render(userContent) {
        $('#result').html(userContent);
    }

    const displayContent = () => {
        $.ajax({url: 'api/instagram', method: 'GET'})
            .then(function(data){
                let content = '';
                content = data.message;
                //data.forEach(e => content += `` );
                render(content);
            })
    };

    const addNewPhoto = () => {
        const addedURL = 
        $.ajax({url: 'api/photos', method: 'POST', data: {photo_url: addedURL}})
        .then(function(data){
            displayContent();
        });
    };

    displayContent();

   $('#addPhoto').on("click", function(){$('#inputUploadPhoto').click();});
   $('#inputUploadPhoto').on("change", function(){$('#frmUpload').submit();});

})

