$(function () {
    $('#ajax-button').click(
    function() {        
        var hostUrl = location.href+"/test";
        console.log(hostUrl);
        var param1 = 1;
        var param2 = 10;
        var data = {"parameter1":param1,"parameter2":param2}

        $.ajax({
            url: hostUrl,
            type:'POST',
            contentType:'application/json',
            dataType: 'json',
            data : JSON.stringify(data) ,
            timeout:3000,
            success: function(data){
                alert(data.ResultSet.Result.qrcode+"の札を渡してください");
            }
        });
    });
});
