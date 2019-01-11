$(function () {
    $('#ajax-button').click(
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
