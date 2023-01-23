const recordButton = document.getElementById('record-button');
recordButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    })
    .then(stream => {
      // Start recording
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      recordButton.addEventListener('click', () => {
        // Stop the recording
        mediaRecorder.stop();
    });
    mediaRecorder.ondataavailable = e => {
      const recordedBlob = e.data;
      // Save the recorded video file
      const url = URL.createObjectURL(recordedBlob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'recorded-video.mp4';
      document.body.appendChild(a);
      a.click();
      }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
