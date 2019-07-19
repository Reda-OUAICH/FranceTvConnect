$(function() {

var Client = {};
var recorder = false;
Client.socket = io.connect();

$('.microphone').click(function() {
    if (!recorder) {
        $(this).removeClass('hidden');
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            recorder = new StereoAudioRecorder(stream, { numberOfAudioChannels: 1, desiredSampRate: 16000, disableLogs: true });
            recorder.record();
        }).catch((error) => {
            console.error('mic error');
        });
    } else {
        $(this).addClass('hidden');
        recorder.stop(speechToText);
        recorder.clearRecordedData();
        recorder = false;
    }
});

function speechToText(audio) {
    const formData = new FormData();
    formData.append('audio', audio);

    $.ajax({
        url: 'https://ulysse-projects.golem.ai/speech/public/speech',
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            if(data.status === "ok") {
                Client.newMessage(data.data);
            }
        }
    });
}

Client.newMessage = function(message) {
    Client.socket.emit('newMessage', message);
    appendMessage(message, true);
};

Client.socket.on('newMessage', function(message){
    appendMessage(message);
});

function appendMessage(message, self = false) {
    let now = Math.floor(Date.now() / 1000);
    let sender = self ? 'Vous' : 'User';
    let className = self ? 'message self' : 'message';

    $('.chat').append("<div class='"+className+"' data-time='"+now+"'><div class='sender'>"+sender+"</div>"+message+"</div>")
}

setInterval(function() {
    let now = Math.floor(Date.now() / 1000);

    $('.message').each(function () {
        let time = $(this).data('time');
        if(now - time > 20) {
            $(this).fadeOut(400, 'swing', function() {
                $(this).remove();
            });
        }
    })
}, 1000);

});
