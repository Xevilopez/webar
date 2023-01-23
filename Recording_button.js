const recordButton = document.getElementById('record-button');
recordButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { facingMode: 'environment' }
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
        const mediaStreamRecording = new MediaStreamRecording(stream);
        mediaStreamRecording.saveToFile('recorded-video.mp4');
          };  
      }
    )
    .catch(error => {
        console.error('Error:', error);
    });
});
