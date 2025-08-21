// Simplified ImageUploader with image preview and submit feature
// Replace with the full implementation before publishing.

import React, { useState } from 'react';

export const ImageUploader = ({ multiple = true }) => {
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
  };

  const handleSubmit = () => {
    setSubmitted(files);
  };

  return (
    <div style={{ border: '2px dashed gray', padding: 20, borderRadius: 12 }}>
      <p>ImageUploader Component with Preview & Submit</p>
      <input type="file" accept="image/*" multiple={multiple} onChange={handleChange} />

      {files.length > 0 && (
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
          {files.map((file, index) => {
            const url = URL.createObjectURL(file);
            return (
              <div key={index} style={{ border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden' }}>
                <img
                  src={url}
                  alt={file.name}
                  style={{ width: 120, height: 120, objectFit: 'cover', display: 'block' }}
                />
                <p style={{ fontSize: 12, textAlign: 'center', margin: 4 }}>{file.name}</p>
              </div>
            );
          })}
        </div>
      )}

      {files.length > 0 && (
        <button
          onClick={handleSubmit}
          style={{ marginTop: 12, padding: '6px 12px', borderRadius: 8, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Submit
        </button>
      )}

      {submitted && (
        <div style={{ marginTop: 20 }}>
          <h4>Submitted Payload:</h4>
          <pre style={{ background: '#f9f9f9', padding: 10, borderRadius: 6 }}>
            {JSON.stringify(submitted.map(f => ({ name: f.name, size: f.size, type: f.type })), null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
