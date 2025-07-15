export default function FileUploader({ onFileUpload }) {
  const handleChange = e => {
    const file = e.target.files[0];
    if (file) onFileUpload(file);
  };

  return (
    <label className="upload-btn">
      Choose File
      <input type="file" accept=".mp3" onChange={handleChange} hidden />
    </label>
  );
}

