import React, { useState } from 'react';

function CreatePostScreen() {
  const [content, setContent] = useState('');

  const handlePost = () => {
    alert("Posted!");
    setContent('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Post</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        style={{ width: '100%', height: 100, padding: 10 }}
      />
      <button onClick={handlePost} style={{ marginTop: 10 }}>Post</button>
    </div>
  );
}

export default CreatePostScreen;
