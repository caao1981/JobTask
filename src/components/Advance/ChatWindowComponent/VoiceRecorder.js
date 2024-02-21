import React, { useRef, useState } from "react";
import RecordRTC from "recordrtc";

const VoiceRecorder = () => {
  const recorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        recorderRef.current = new RecordRTC(stream, {
          type: "audio",
        });
        recorderRef.current.startRecording();
        setRecording(true);
      })
      .catch((err) => console.error("Error accessing microphone:", err));
  };

  const stopRecording = () => {
    recorderRef.current.stopRecording(() => {
      const audioBlobData = recorderRef.current.getBlob();
      setAudioBlob(audioBlobData);
      recorderRef.current.getDataURL((dataURL) => {
        // Here, you can send the dataURL or audioBlobData to your chat app's backend or use it as needed.
        console.log("Recorded audio data:", dataURL);
      });
    });
    setRecording(false);
  };

  const playAudio = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioElement = new Audio(audioUrl);
      audioElement.play();
    }
  };

  return (
    <div>
      {recording ? (
        <>
          <button onClick={stopRecording}>Stop Recording</button>
          <p>Recording...</p>
        </>
      ) : (
        <>
          <button onClick={startRecording}>Start Recording</button>
          <p>Not Recording</p>
        </>
      )}
      {audioBlob && (
        <>
          <button onClick={playAudio}>Play Recorded Audio</button>
        </>
      )}
    </div>
  );
};

export default VoiceRecorder;
