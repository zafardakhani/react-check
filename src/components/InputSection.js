import React from 'react';
import '../App.css';

const InputSection = ({ text, setText, handleUpload }) => (
  <div className="input-section">
    <textarea
      placeholder="Enter your comment here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button onClick={handleUpload}>Upload</button>
  </div>
);

export default InputSection;
