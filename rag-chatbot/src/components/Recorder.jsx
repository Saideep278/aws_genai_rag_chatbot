import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';

export default function Recorder({ onRecordingComplete }) {
  const [recording, setRecording] = useState(false);
  const recorderRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorderRef.current = new RecordRTC(stream, { type: 'audio' });
    recorderRef.current.startRecording();
    setRecording(true);
  };

  const stopRecording = async () => {
    await recorderRef.current.stopRecording(() => {
      let blob = recorderRef.current.getBlob();
      onRecordingComplete(blob);
    });
    setRecording(false);
  };

  return (
    <button
      onClick={recording ? stopRecording : startRecording}
      className="record-btn"
    >
      {recording ? 'Stop' : 'Start Recording'}
    </button>
  );
}

