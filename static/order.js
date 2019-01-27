$(function () {
    $('#ajax-button').click(
    function() {        
        var hostUrl = location.href+"/test";
        console.log(hostUrl);
        var param1 = 1;
        var param2 = 10;

        $.ajax({
            url: hostUrl,
            type:'POST',
            dataType: 'json',
            data :{parameter1 : param1, parameter2 : param2 } ,
            timeout:3000,
            success: function(result){
                console.log(result);
            }
        });
    });
});
