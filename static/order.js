$( function() {
    $('#ajax-button').click(
    function() {
        var hostUrl= 'http://localhost:8000';
        var param1 = 1;
        var param2 = 10;
        $.ajax({
            url: hostUrl,
            type:'POST',
            dataType: 'jsonp',
            data : {parameter1 : param1, parameter2 : param2 },
            timeout:3000,
            success: function(result){
                console.log(result);
            }
        });
    });
});