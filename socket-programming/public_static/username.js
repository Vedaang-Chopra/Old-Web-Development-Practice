$(function () {
    var username = $('#username');
    var button=$('#button1')
    button.click(function() {
        socket.emit('msg', {
            message: username.val()
    })
});
});