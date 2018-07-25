var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};

app.initialize();

btn.addEventListener('click', () => {
    // this.select();
    cordova.plugins.permissions.hasPermission(cordova.plugins.permissions.RECORD_AUDIO, checkPermissionCallback, null);

    xunfeiListenSpeaking.startListen(success => {
        if (success) {
            // success即是返回的文字
            this.speechText = success;
            alert(success);
        } else {
            // alert(success);
        }
        setTimeout(this.startSpeak(), 3000);
    }, err => {
        // alert(err);
    }, true, false);
})

function checkPermissionCallback(status) {
    if (!status.hasPermission) {
        var errorCallback = function () {
            alert("获取录音失败");
        }
        cordova.plugins.permissions.requestPermission(
            cordova.plugins.permissions.RECORD_AUDIO,
            function (status) {
                if (!status.hasPermission) errorCallback();
                alert("我可以听你说话了哦");
            },
            errorCallback);
    }
}