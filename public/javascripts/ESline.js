$(function(){
	/*var iosocket = io.connect('/');
	iosocket.on('connect',function(){
		$("#incomingChatMessage").append($('<li>Connected</li>'));
		iosocket.on('message',function(message){
			$("#incomingChatMessage").append($('<li></li>')).text(message);
		});
		iosocket.on('disconnect',function(){
			$("#incomingChatMessage").append($('<li>Disconnected</li>'));
		});
	});
	$("#outgoingChatMessage").keypress(function(event){
		if(event.which == 13){
			event.preventDefault();
			MessageSend();
		}
	});
	$('#submit_btn').click(function(){
		MessageSend();
	});
	function MessageSend(){
		var value = $("#outgoingChatMessage").val();
		iosocket.send(value);
		$("#incomingChatMessage").append($('<li></li>')).text(value);
		$("#outgoingChatMessage").val('');
	}*/
	var socket = io.connect();
	socket.on('nicknames', function (data) {
		$('#nicknames').empty().append($('<ul>'));
		for(var i=0; i<data.length; i++) {
  			$('#nicknames ul').append('<li>' + data[i] + '</li>');
    	}
	});
	socket.on('user message', function (data) {
		$('#messages').append($('<p>').append($('<strong>').text(data.nick), data.message));
	});
	socket.on('announcement', function (data) {
		$('#messages').append($('<p>').append($('<em>').text(data.message)));
	});
      
	$('#set-nickname').submit(function() {
		socket.emit('nickname', $('#nickname').val(), function (data) {
			if (!data) {
				$('#set-nickname').hide();
				$('#send-message').show();
			} else {
				$('#set-nickname').prepend($('<p>').text('Sorry - that nickname is already taken.'));
			}
		});
		return false;
    });
    $('#send-message').submit(function () {
		socket.emit('user message', $('#message').val());
		$('#message').val('').focus();
		return false;
    });
});
