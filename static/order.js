$(function () {
    $('#ajax-button').click(
<<<<<<< HEAD
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
=======
        function () {
            var data = 'okyakusandayo';
            $.ajax({
                url: '/order/test',
                type: 'POST',
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: 'application/json'
            })
            /*    success: function(response){
                console.log(response);
            }
            })
            .done(function (data) {
                alert("ok");
            }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error");
            })*/
        });
});
>>>>>>> 336f141d794bfa9d239d23fa11a6bd4a6dbf6fef
