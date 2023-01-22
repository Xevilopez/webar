// use the MediaRecorder API, which allows you to record audio and video in the browser. To use this API, 
// you would need to add the following code to your JavaScript:

var mediaRecorder;

navigator.mediaDevices.getUserMedia({audio: true})
  .then(function(stream) {
    mediaRecorder = new MediaRecorder(stream);
  });

// You can then use the mediaRecorder object to start, stop, and manage the recording.

  function startRecording() {
    mediaRecorder.start();
  }
  
  function stopRecording() {
    mediaRecorder.stop();
  }

// enable the button when the recording starts and disable it when the recording stops.

function startRecording() {
  mediaRecorder.start();
  document.getElementById("save-button").disabled = false;
}

function stopRecording() {
  mediaRecorder.stop();
  document.getElementById("save-button").disabled = true;
}

// To save the recording, you can use the ondataavailable event of the MediaRecorder 
// object to create a Blob of the recorded data. Then create a URL for the Blob using URL.createObjectURL().

function saveRecording() {
  mediaRecorder.ondataavailable = function(event) {
    var blob = new Blob([event.data], { type: "audio/webm" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "recording.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };
}

// Button shape change from play to pause:

$(".button").click(function() {
  $(this).toggleClass("active");
});
