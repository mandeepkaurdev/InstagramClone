
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

    displayContent();

   // $('#addNew').on("click", addNewPic);
})

