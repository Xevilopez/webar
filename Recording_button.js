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
        // Create a new MediaStreamRecording object
            const mediaStreamRecording = new MediaStreamRecording(stream);
                // Use the saveToFile method to save the video to a file
                mediaStreamRecording.saveToFile('recorded-video.mp4').then(file => {
                  // Use the PHPhotoLibrary class to save the video to the Photos app
                  const photoLibrary = new photoLibrary();
                  photoLibrary.writeImageDataToSavedPhotosAlbum(file, 'video/mp4', (error) => {
                      if (error) {
                          console.error('Error saving video to Photos app:', error);
                      } else {
                          console.log('Video saved successfully to Photos app');
                      }
                  });
              });
          };  
      }
    )
    .catch(error => {
        console.error('Error:', error);
    });
});
