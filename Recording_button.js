var mediaRecorder;

navigator.mediaDevices.getUserMedia({audio: true})
  .then(function(stream) {
    mediaRecorder = new MediaRecorder(stream);
  });

  function startRecording() {
    mediaRecorder.start();
  }
  
  function stopRecording() {
    mediaRecorder.stop();
  }