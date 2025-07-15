// src/api/rasa.js
import axios from 'axios';

// Replace with your Rasa server's public IP or domain
const RASA_URL = "http://13.232.91.144:5005/webhooks/rest/webhook";

// Replace with your ALB URL (make sure to update this)
const WHISPER_API_URL = 'http://13.235.87.171:5000/transcribe';

/**
 * Send text query to Rasa REST endpoint
 */
export const sendTextQuery = async (message) => {
  const response = await axios.post(RASA_URL, {
    sender: "user",
    message
  });
  return response.data;
};

/**
 * Send audio file to Whisper backend to transcribe
 * Returns JSON: { transcription: "...text..." }
 */
export const sendAudioFileToWhisper = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(WHISPER_API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;  // expected to have field like transcription or text
};

