const recordButton = document.getElementById('record-button');
recordButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { facingMode: 'environment' }
    })
    .then(stream => {
        // code to start recording and saving the video file goes here
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        recordButton.addEventListener('click', () => {
          // Stop the recording
          mediaRecorder.stop();

          mediaRecorder.ondataavailable = e => {
            const recordedBlob = e.data;
            // code to save the recorded video file goes here
            const url = URL.createObjectURL(recordedBlob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'recorded-video.mp4';
            document.body.appendChild(a);
            a.click();
        }

      });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
