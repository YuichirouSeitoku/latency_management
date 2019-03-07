$(function () {
    $('#ajax-button').click(
    function() {        
        var hostUrl = location.href+"/new";
        console.log(hostUrl);
        var salt = document.getElementById("salt").value;
        var cheese = document.getElementById("cheese").value;
        var redPapper = document.getElementById("redPapper").value;
        var mayo = document.getElementById("mayo").value;
        var data = {"salt":salt,"cheese":cheese,"redPapper":redPapper,"mayo":mayo}

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
